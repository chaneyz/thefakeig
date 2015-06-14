var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var validator = require('validator');

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		password: null,
		username: null,
		createdAt: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/austin-zc-therealig',
	idAttribute: "_id"
});

