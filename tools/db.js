var List = require('../models/lists');
var User = require('../models/user');

var db = {
    getAllLists: function(req, res, callback) {
        List.find({}).sort({date: -1}).exec(function(err, lists) {
            if (err)
                console.error(err);
            callback(lists);
        });
    },
    getAllUsers: function(req, res, callback) {
        User.find(function(err, users) {
            if (err)
                console.error(err);
            callback(users);
        });
    },
    createNewList: function(req, res, callback) {
        new List({title: req.body.title, description: req.body.description, items: req.body.books, author: req.body.author}).save(function(err, result) {
            if (err)
                console.error(err);
            callback(result._id);
        });
    },
    createNewUser: function(req, res, callback) {
        User.findOne({
            id: req.body.id
        }, function(err, user) {
            if (!user) {
                new User({id: req.body.id, name: req.body.name, url: req.body.url}).save(function(err, newUser) {
                    if (err)
                        console.error(err);
                    callback(newUser);
                });
            }
        })

    },
    getCurrentUserById: function(req, res, callback) {
        User.findOne({
            _id: req.params.id
        }, function(err, user) {
            if (typeof user != 'undefined') {
                callback(user);
            }
            if (err)
                console.error(err);
            }
        );
    },
    getCurrentUserByFacebookId: function(req, res, callback) {
        User.findOne({
            id: req.params.id
        }, function(err, user) {
            if (typeof user != 'undefined') {
                callback(user);
            }
            if (err)
                console.error(err)
        });
    },
    updateUserListsScope: function(req, res, id, callback) {
        User.findOne({
            _id: req.body.author
        }, function(err, user) {
            user.lists.push(id);
            user.save(function(err, result) {
                if (err)
                    console.error(err);
                callback(result._id);
            });
        });
    },
    getCurrentUserListsData: function(req, res, user, callback) {
        var lists = user.lists;
        List.find({
            '_id': {
                $in: lists
            }
        }, function(err, lists) {
            callback(lists);
        });

    },
    getCurrentListUserData: function(req, res, id, callback) {
        User.findOne({
            _id: id
        }, function(err, user) {
            if (typeof user != 'undefined') {
                callback(user)
            }
            if (err)
                console.error(err)
        });
    },
    getCurrentListById: function(req, res, callback) {
        List.findOne({
            _id: req.params.id
        }, function(err, list) {
            if (typeof list != 'undefined') {
                callback(list)
            }
            if (err)
                console.error(err)
        });
    }
}

module.exports = db;
