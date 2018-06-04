const { message, danger } = require('danger');
const { exec } = require('shelljs');
const R = require('ramda');

const STDOUT = R.lensProp('stdout');
const NAME = 'styled-material-components';
const PR_URL = /https:\/\/styled-material-components-(?:[^-]*)-([^.]+)\.now\.sh/;

const getDeployUrl = R.compose(
  R.head,
  R.match(PR_URL),
  R.view(STDOUT),
  targetApp => exec(`yarn now -n ${targetApp} -d docs/ -t ${process.env.NOW_TOKEN}`),
);

const branch = process.env.CIRCLE_BRANCH || danger.github.pr.head.label;
const appName = branch === 'master' ? NAME : `${NAME}-pr-${danger.github.pr.number || 0}`;

// Get the modified components in the PR
const getModifiedComponents = R.compose(
  R.uniq,
  R.map(
    R.compose(
      R.replace('.js', ''),
      R.nth(1),
      R.match(/\/components\/([^/]+)/)
    ),
  ),
  R.filter(R.test(/\/components\//))
);

const modifiedComponents = getModifiedComponents(danger.git.modified_files);

// Build the app
exec('yarn export');

// Deploy the app
const deployURL = getDeployUrl(appName);

let link = `https://${appName}.now.sh`;

// Alias the link
if (branch === 'master') {
  exec(`yarn now alias ${deployURL} styled-material-components.com -t ${process.env.NOW_TOKEN}`);
  link = 'https://styled-material-components.com';
} else {
  exec(`yarn now alias ${deployURL} ${appName} -t ${process.env.NOW_TOKEN}`);
}

let markdown = '';

if (modifiedComponents.length > 0) {
  markdown += `
    ### Modified Components
    * ${modifiedComponents.join('\n * ')}

  `;
}

markdown += `
  ### PR Application
  * [${appName}](${link})
`;

message(markdown);
