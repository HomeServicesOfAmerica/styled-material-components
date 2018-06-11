const { deployApplication } = require('../utils/deploy');

if (process.env.CIRCLE_BRANCH === 'master') {
  deployApplication();
} else {
  console.log('Skipping because not on master');
}
