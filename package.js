Package.describe({
  summary: "Meteor Spiderable Package with --ssl-protocol=tlsv1",
  version: "0.1.3",
  git: 'https://github.com/Gentlenode/spiderable-ssl'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0")

  api.use('webapp', 'server');
  api.use(['templating'], 'client');
  api.use(['underscore'], ['client', 'server']);

  api.export('Spiderable');

  api.add_files('spiderable.html', 'client');
  api.add_files('spiderable_server.js', 'server');
});
