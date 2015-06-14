var $ = jQuery = require('jquery');
var Backbone = require('backbone');
var _ = require('../node_modules/backbone/node_modules/underscore');
Backbone.$ = $

var AppRouter = require('./AppRoutes.js');

$(document).ready(function() {
	var app = new AppRouter();
	Backbone.history.start();

	// need to add variables for models & collections below
	
	var UserModel = require('./models/user-model.js');
	var UserCollection = require('./collections/user-collection.js');

	var PhotoModel = require('./models/photo-model.js');
	var PhotoCollection = require('./collections/photo-collection.js');

	var commentModel = require('.models/comment-model.js');
	var commentCollection = require('./collections/comment-collection.js');

	//need to add builders below. Should have 1 for photos and comments
	//need one for user comments

	var photoRowBuilder = _.template($('#photo-row-template').html());
	var commentRowBuilder = _.templage($('#comment-row-template').html());

	//need to add list collection variables below

	var photoFeed = new PhotoCollection();
	var commentList = new CommentCollection();


	//fetch call for photos and comments--maybe tags

	photoFeed.fetch({
		// success: function() {
		// 	commentList.fetch();
		// }
	});

	$('#login-form').on('submit', function(e) {
		e.preventDefault();
		var currentUser = new UserModel ({
			username: $('#login-username').val(),
			password: $('#login-password').val()
		})
	});

	$('#add-form-btn').on('click', function() {
		$('#add-new-photo-form').show();
	});

	$('#btn-add-photo-cancel').on('click', function() {
		$('#add-new-photo-form').hide();
	});

	$('#add-photo-form').on('submit', function(e) {
		e.preventDefault();
		var photoToAdd = new PhotoModel({
			photoUrl: $('#photo-input-url').val(),
			caption: $('#photo-input-caption').val()
		});

		photoFeed.add(photoToAdd);
		photoToAdd.save();
	});

	photoFeed.on('add', function(addedPhoto) {
		var photoHtml = photoRowBuilder({model: addedPhoto});

		$('#photo-feed').append(photoHtml);

		//adding comments to the photos
		$('[data-form-cid="'+addedImage.cid+'"]').on('submit', function(e) {
			e.preventDefault();
			var $commentInput = $(this).find('.comment-input');

			var commentToAdd = new CommentModel({
				text: $commentInput.val(),
				imageId: addedImage.id
			});

			commentList.add(commentToAdd);
			commentToAdd.save();
		})
	});

	commentList.on('add', function(addedComment) {
		var commentHtml = commentRowBuilder({model: addedComment});
		var imageId = addedComment.get('imageId');
		var imageModel = imageList.get(imageId);

		$('[data-photo-cid="'+imageModel.cid+'"] .comment-list').append(commentHtml);
	});

// console.log('why this no worky?')



});