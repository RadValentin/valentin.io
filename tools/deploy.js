const path = require('path');
const FtpDeploy = require('ftp-deploy');
const deployConfig = require('./deploy-config.json');
const ftpDeploy = new FtpDeploy();

/*
Sample deploy config
{
  "host": "",
  "username": "",
  "password": "",
  "port": 21,
  "remoteRoot": "/public_html/valentin.io/",
  "localRoot": "../public/"
}
*/

const ftpConfig = Object.assign({}, deployConfig,{
	localRoot: path.join(__dirname, deployConfig.localRoot)
})
	
ftpDeploy.deploy(ftpConfig, function(err) {
	if (err) console.log(err)
	else console.log('Deployed successfully! 👌');
});