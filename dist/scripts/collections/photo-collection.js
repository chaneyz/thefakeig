var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Photo = require('../models/photo-model.js');

module.exports = Backbone.Collection.extend({
	model: Photo,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/austin-zc-therealig'
});