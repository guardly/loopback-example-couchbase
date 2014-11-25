var app = require('./server');
var dataSource = app.dataSources.accountDB;
var Account = app.models.account;
var accounts = [ 
    { email: "foo@bar.com",
      level: 10,
      created: new Date(),
      modified: new Date()
    }, {
      email: "bar@bar.com",
      level: 20,
      created: new Date(),
      modified: new Date()
    } ];

var count = accounts.length;
dataSource.automigrate('account', function (err) {
  accounts.forEach(function(act) {
    Account.create(act, function(err, result) {
      if(!err) {
        console.log('Record created:', result);
        count--;
        if(count === 0) {
          console.log('done');
          dataSource.disconnect();
        }
      }
    });
  });
});

