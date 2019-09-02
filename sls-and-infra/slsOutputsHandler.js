const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');

function handler (data, serverless, options) {

  // output the Frontend URL:
  serverless.cli.consoleLog(`${chalk.bgBlue.white.bold('Useful Links and outputs:')}`);

  serverless.cli.consoleLog(`    ${chalk.bold('Frontend: ')} ${chalk.blue(data['FrontendUrl'])}`);
  serverless.cli.consoleLog(`    ${chalk.bold('CI/CD pipeline: ')} ${chalk.blue(data['CICDPipeline'])}`);

   // write frontend public outputs to a file
  let publicServelrssOutputs={};

  publicServelrssOutputs['apiEndpoint'] = data['ServiceEndpoint'] || 'Unknown';
  publicServelrssOutputs['stage'] = serverless.service.provider['stage'] || 'Unknown';

  const frontendOutputsPath = serverless.config.servicePath+'/frontend/dist/publicOutputs.js';
  fs.writeFile(
  frontendOutputsPath,
  "publicOutputs = "+ JSON.stringify(publicServelrssOutputs),
  function(err) {
              if(err) {
                   console.log('failed to write public outputs to target '+err);
               }
              console.log("Saved Public frontend outputs to publicOutputs.js");
      });
}

module.exports = { handler }