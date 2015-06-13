var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
	routes: {
		'': 'login',
		'login': 'login',
		'register': 'register',
		'feed': 'feed'
	},

	login: function() {
		$('.page').hide();
		$('#login').show();
	},

	register: function() {
		$('.page').hide();
		$('#register').show();
	},

	feed: function() {
		$('.page').hide();
		$('#feed').show();
	},
});