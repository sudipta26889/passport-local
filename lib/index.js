/**
 * Module dependencies.
 */
var Strategy = require('./strategy');
var RedBullStrategy = require('./redbullstrategy');


/**
 * Expose `Strategy` directly from package.
 */
exports = module.exports = Strategy;
exports = module.exports = RedBullStrategy;

/**
 * Export constructors.
 */
exports.Strategy = Strategy;
exports.RedBullStrategy = RedBullStrategy;
