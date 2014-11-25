//
// WARNING: THIS FILE WILL NOT RUN UNTIL YOU INSTALL, ADD, AND CONFIGURE A
// MYSQL DATA SOURCE, FOLLOWING INSTRUCTIONS IN "Getting Started with LoopBack"
// See http://docs.strongloop.com/display/LB2/Connect+an+API+to+a+datasource
//

var app = require('./server');
var dataSource = app.dataSources.accountDB;

dataSource.discoverSchema('account', {owner: 'demo'}, function (err, schema) {
    console.log(JSON.stringify(schema, null, '  '));
});

dataSource.discoverAndBuildModels('account', {owner: 'demo'}, function (err, models) {
    models.Account.find(function (err, act) {
        if (err) {
            console.error(err);
        } else {
            console.log(act);
        }
        dataSource.disconnect();
    });
});

