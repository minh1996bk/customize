/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */
var requireAll = require('require-all');
var path = require('path');
module.exports.bootstrap = async function(done) {
  let repositories = requireAll({
    dirname: path.dirname(__dirname) + '/api/repositories/',
    filter      :  /(.+Repository)\.js$/,
    excludeDirs :  /^\.(git|svn)$/,
    recursive   : true
  });

  _.forEach(repositories, function(content, name) {
    global[name] = content
  });
  return done();

};
