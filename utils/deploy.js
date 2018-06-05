const { exec } = require('shelljs');
const R = require('ramda');

const STDOUT = R.lensProp('stdout');
const NAME = 'styled-material-components';
const PR_URL = /https:\/\/styled-material-components-(?:[^-]*)-([^.]+)\.now\.sh/;

// Given a target application name, deploy static site to now, return the deployed url
const getDeployUrl = R.compose(
  R.head,
  R.match(PR_URL),
  R.view(STDOUT),
  targetApp => exec(`yarn now -n ${targetApp} -d docs/ -t ${process.env.NOW_TOKEN}`),
);

const deployApplication = (options, message = console.log) => {
  const { prNumber, branch } = R.merge({
    prNumber: 0,
    branch: 'master',
  }, options);
  const appName = branch === 'master' ? NAME : `${NAME}-pr-${prNumber}`;
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

  message(`**Application URL**: [${appName}](${link})`);
};

module.exports = {
  deployApplication,
};

