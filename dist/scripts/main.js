var $ = jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('../node_modules/backbone/node_modules/underscore');
Backbone.$ = $;

var UserModel = require('./models/user-model.js');
var UserCollection = require('./collections/user-collection.js');



var AppRouter = require('./AppRoutes.js');
