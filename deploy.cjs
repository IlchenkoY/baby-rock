const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "admin_babyrock",
  password: "AkH-cB8ujOHqFNdM",
  host: "212.90.188.166",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/public_html",
  include: ["*", "**/*"],
  deleteRemote: true,
  forcePasv: true,
};

ftpDeploy.deploy(config, function (err, res) {
  if (err) console.log(err);
  else console.log("finished:", res);
});
