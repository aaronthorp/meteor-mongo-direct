Package.describe({
    summary: "Meteor MongoDB Direct Collection Extension"
});

Package.on_use(function (api, where) {
    api.use([
      'underscore'
    ]);

    api.add_files('server.js', 'server');
});