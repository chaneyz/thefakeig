var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		text: null,
		photoId: null,
		userId: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/austin-zc-therealig',
	idAttribute: '_id'
});