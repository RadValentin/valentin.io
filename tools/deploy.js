const path = require('path');
const FtpDeploy = require('ftp-deploy');
const deployConfig = require('./deploy-config.json');
const ftpDeploy = new FtpDeploy();

const ftpConfig = Object.assign({}, deployConfig,{
	localRoot: path.join(__dirname, deployConfig.localRoot)
})
	
ftpDeploy.deploy(ftpConfig, function(err) {
	if (err) console.log(err)
	else console.log('Deployed successfully! 👌');
});