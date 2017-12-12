const path = require('path');
const FtpDeploy = require('ftp-deploy');
const ProgressBar = require('progress');
const deployConfig = require('./deploy-config.json');

const ftpDeploy = new FtpDeploy();
const bar = new ProgressBar(':current% [:bar]', {
  total: 100,
  width: 40,
  clear: true,
  renderThrottle: 300
});

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

ftpDeploy.on('uploading', function(data) {
  bar.tick(data.percentComplete);
});
