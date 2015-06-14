var $ = require('jquery');
var Backbone = require('backbone');
var UserModel = require('../models/user-model.js');
Backbone.$ = $;

module.exports = Backbone.Collection.extend({
	model: UserModel
})