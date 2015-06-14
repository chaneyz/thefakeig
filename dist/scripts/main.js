var $ = jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('../node_modules/backbone/node_modules/underscore');
Backbone.$ = $

var UserModel = require('./models/user-model.js');
var UserCollection = require('./collections/user-collection.js');



var AppRouter = require('./AppRoutes.js');

$(document).ready(function() {
	var app = new AppRouter();
	Backbone.history.start();

	$('#login-form').on('submit', function(e) {
		e.preventDefault();
		var currentUser = new UserModel ({
			username: $('#login-username').val(),
			password: $('#login-password').val()
		})
	});

});