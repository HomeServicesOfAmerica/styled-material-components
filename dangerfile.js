const { message, fail, danger } = require('danger');
const R = require('ramda');
const { deployApplication } = require('./utils/deploy');
const checkForExtend = require('./utils/checkForExtend');

checkForExtend(danger.git, fail);

const branch = process.env.CIRCLE_BRANCH || danger.github.pr.head.label;
const prNumber = danger.github.pr.number || 0;

deployApplication({ branch, prNumber }, message);

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

if (modifiedComponents.length > 0) {
  let msg = '### Modified Components\n\n* ';
  msg += modifiedComponents.join('\n * ');
  message(msg);
}

