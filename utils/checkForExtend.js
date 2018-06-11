const R = require('ramda');
const fs = require('fs');

module.exports = function checkForExtend(gitDSL, fail) {
  const { modified_files, created_files } = gitDSL;
  const files = R.filter(
    R.complement(R.endsWith('checkForExtend.js')),
    R.concat(modified_files, created_files)
  );
  files.forEach((file) => {
    const contents = fs.readFileSync(file);
    if (R.contains('.extend`', contents)) {
      fail(`${file} contains .extend usage`);
    }
  });
};
