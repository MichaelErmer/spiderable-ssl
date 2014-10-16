Package.describe({
  summary: "Meteor Spiderable Package with --ignore-ssl-errors",
  version: "0.0.4",
  git: 'https://github.com/Gentlenode/spiderable-ssl'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0")

  api.use('webapp', 'server');
  api.use(['templating'], 'client');
  api.use(['underscore'], ['client', 'server']);

  api.export('Spiderable');

  api.add_files('spiderable.js', ['client', 'server']);
  api.add_files('spiderable_server.js', 'server');
});
