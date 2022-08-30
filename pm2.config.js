let apps = [
    {
      name   : "plone_backend",
      script: 'venv/bin/runwsgi instance/etc/zope.ini'
    },
    // {
    //   name   : "plone_frontend_mpd_training",
    //   script: 'yarn build && yarn start:prod',
    //   cwd: '../frontend'
    // }
  ];

module.exports = { apps: apps };

