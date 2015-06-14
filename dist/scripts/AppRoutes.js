var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
	routes: {
		'': 'home',
		'home': 'home',
		'login': 'login',
		'register': 'register',
		'feed': 'feed'
	},

	home: function() {
		$('.page').hide();
		$('#home').fadeIn("slow");
	},

	login: function() {
		$('.page').hide();
		$('#login').fadeIn("slow");
	},

	register: function() {
		$('.page').hide();
		$('#register').fadeIn("slow");
	},

	feed: function() {
		$('.page').hide();
		$('#feed').fadeIn("slow");
	}
});