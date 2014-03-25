Package.describe({
    summary: "Meteor MongoDB Direct Collection Extension"
});

Package.on_use(function (api, where) {
    api.use([
        'standard-app-packages',
        'coffeescript',
        'underscore'
    ]);

    api.add_files('client.js', 'client');
    api.add_files('server.js', 'server');
});