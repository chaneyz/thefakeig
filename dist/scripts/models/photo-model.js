var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var validator = require('validator');

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		photoUrl: null,
		caption: null,
		userId: null,
		createdAt: null
	},
	
	validate: function(attr, options) {
		if(attr.photoUrl.length === 0){
			return 'A photo must be present';
		}

		else if(attr.caption.length === 0){
			return 'A caption must be present';
		}
		return false;
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/austin-zc-therealig',
	idAttribute: "_id"
});