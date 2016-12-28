// Load `*.js` under current directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
exports.ExchangeRate = {};

require('fs').readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    var item = require('./' + file);
    exports[name] = item;
    if (item.hasOwnProperty('cost')) {
		exports.ExchangeRate[name] = item.cost;
    }
  }
});