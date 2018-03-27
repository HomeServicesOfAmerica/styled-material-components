const fs = require('fs');
const path = require('path');
const recursive = require('recursive-readdir-filter');

/*
  CONFIG OPTIONS
*/
const INPUT_DIR = path.join(__dirname, '../../material-design-icons');
const OUTPUT_DIR = path.join(__dirname, '../src/icons/svg-icons');
const INDEX_PATH = path.join(OUTPUT_DIR, '../index.js');
const MAP_PATH = path.join(OUTPUT_DIR, 'iconPaths.js');
const TARGET_SIZE = '24';

const SELECT_FILE_REGEX = new RegExp(`ic_(.*?)_${TARGET_SIZE}px.svg`);
const SELECT_PATH_REGEX = /<path(.*?)\/>/g;
const SNAKE_CASE_REGEX = /_./gi;
const FILL_OPACITY_REGEX = /fill-opacity/;
const FILL_ATTRIBUTE_REGEX = / fill=".+?"/g;

const options = {
  filterFile: stats => stats.path.match(/svg\/production/) && stats.name.match(SELECT_FILE_REGEX),
};

/*
UTIL METHODS
*/
// filters out a hyphenated html attribute that doesn't convert to React nicely
const fillOpacityFix = (pathString) => {
  if (pathString.match(FILL_OPACITY_REGEX)) {
    return pathString.replace(FILL_OPACITY_REGEX, 'fillOpacity');
  }
  return pathString;
};

// removes any `fill` attributes from svg paths
const fillAttributeFix = (pathString) => {
  if (pathString.match(FILL_ATTRIBUTE_REGEX)) {
    return pathString.replace(FILL_ATTRIBUTE_REGEX, '');
  }
  return pathString;
};

// receives a file input and returns an array of '<path />' strings
const getSvgPaths = (input) => {
  const svgPaths = input.match(SELECT_PATH_REGEX);

  // catch `fill-opacity` attribute and convert to camelCase
  // catch `fill` attribute and remove
  if (typeof svgPaths === 'string') {
    return fillOpacityFix(fillAttributeFix(svgPaths));
  }

  // if multiple paths, loop through and add a key for React
  if (Array.isArray(svgPaths)) {
    return svgPaths.map((svgPath, i) => {
      const fixedPath = fillOpacityFix(fillAttributeFix(svgPath));
      return `${fixedPath.slice(0, fixedPath.length - 2)} key='path${i}' />`;
    });
  }
  return svgPaths;
};

// returns an icon name based on its file name
// if given 'path' as a second argument, it returns the path name
// eg:  file = ic_keyboard_arrow_left_24px.svg
//    convertName(file) // KeyboardArrowLeft
//    convertName(file, 'path') // keyboard_arrow_left

const convertName = (name, type) => {
  let pathName;
  // remove previx and suffix
  if (name.match(SELECT_FILE_REGEX)) {
    pathName = name.match(SELECT_FILE_REGEX)[1];
  } else {
    pathName = null;
  }
  // convert snake_case to camelCase
  if (pathName) {
    let fileName = pathName.replace(
      SNAKE_CASE_REGEX,
      str => (isNaN(Number(str[1])) ? str[1].toUpperCase() : str[1])
    );
    // capitalize first letter
    fileName = fileName[0].toUpperCase() + fileName.slice(1);
    return type === 'path' ? pathName : fileName;
  }
};

// is called by `WriteComponent`. defines the format of the component files
const componentTemplate = (fileName, svgPaths) =>
  `import React from 'react';
import { Icon } from '../icons';

const ${fileName}Path = () => [${svgPaths.map(svgPath => `\n  ${svgPath}`)},\n];

const ${fileName}Icon = Icon.extend.attrs({
  children: ${fileName}Path,
})\`\`;

export default ${fileName}Path;
export { ${fileName}Icon };
`;

// writes a javascript file for a standalone Icon
const writeComponent = (svgPaths, file) => {
  if (!svgPaths) console.error('no paths found in this svg!');
  const fileName = convertName(file);
  if (!fs.existsSync(`${OUTPUT_DIR}/${fileName}.js`)) {
    fs.open(`${OUTPUT_DIR}/${fileName}.js`, 'w', (err) => {
      if (err) throw err;
    });
  }
  fs.writeFile(`${OUTPUT_DIR}/${fileName}.js`, componentTemplate(fileName, svgPaths), (err) => {
    if (err) throw err;
    console.log(`${fileName} saved...`);
  });
};

// adds an export line to an index file
const addToIndex = (file) => {
  const fileName = convertName(file);

  fs.appendFile(
    INDEX_PATH,
    `\nexport { ${fileName}Icon } from './svg-icons/${fileName}';`,
    'utf8',
    (err) => {
      if (err) throw err;
    }
  );
};

// adds an entry to a map object, where each entry is something like
// `keyboard_arrow_left: './svg-icons/KeyboardArrowLeft.js'`
const addToMap = (file) => {
  const fileName = convertName(file);
  const pathName = convertName(file, 'path');
  fs.appendFile(MAP_PATH, `\n  ${pathName}: dynamic(import('./${fileName}')),`, 'utf8', (err) => {
    if (err) throw err;
  });
};

/*
  BEGIN SCRIPT
*/

// create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdir(OUTPUT_DIR, (err) => {
    if (err) throw err;
    console.log(`Created directory ${OUTPUT_DIR}`);
  });
}

// create index file
if (!fs.existsSync(INDEX_PATH)) {
  fs.open(INDEX_PATH, 'w', (err) => {
    if (err) throw err;
    console.log(`Created index file at ${INDEX_PATH}`);
  });
}
fs.writeFile(INDEX_PATH, `export { Icon } from './icons';`, 'utf8', (err) => {
  if (err) throw err;
});

// create map file
// if (!fs.existsSync(MAP_PATH)) {
//   fs.open(MAP_PATH, 'w', (err) => {
//     if (err) throw err;
//     console.log(`Created map file at ${MAP_PATH}`);
//   });
// }
// fs.writeFile(
//   MAP_PATH,
//   `import dynamic from 'next/dynamic';\n\nexport const iconPaths = {`,
//   'utf8',
//   (err) => {
//     if (err) throw err;
//   }
// );

// read raw svgs
recursive(INPUT_DIR, options, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      const paths = getSvgPaths(data);
      if (paths && file) {
        writeComponent(paths, file);
        addToIndex(file);
        // addToMap(file);
      }
    });
  });
});
