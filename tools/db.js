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
                new User({
                  id: req.body.id,
                  name: req.body.name,
                  email: req.body.email,
                  picture: req.body.picture,
                  pictureLarge: req.body.pictureLarge
                }).save(function(err, newUser) {
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
    getCurrentListById: function(req, res, id, callback) {
        List.findOne({
            _id: id
        }, function(err, list) {
            if (typeof list != 'undefined') {
                callback(list)
            }
            if (err)
                console.error(err)
        });
    },
    updateCurrentList: function (req, res, callback) {
        List.findOne({
            _id: req.params.id
        }, function(err, list) {
            if (req.params.option == 'like') {
                var index = list.likes.indexOf(req.body.id)
                if (index == -1) {
                    list.likes.push(req.body.id);
                } else {
                    list.likes.splice(index, 1);
                }
                list.save(function(err, updatedList) {
                    if (err) console.error(err);
                    callback(updatedList.likes);
                });
            }
        });
    },
    postNewComment : function (req, res, user, list, callback) {
        List.findOne({
            _id: list._id
        }, function(err, list) {
            var date = new Date().toISOString();
            var commentData = {
                text : req.body.text,
                author : {
                    name : user.name,
                    id : user._id,
                    picture : user.picture,
                    email : user.email
                },
                date : date
            }
            list.comments.push(commentData);
            list.save(function(err, result) {
                if (err) console.error(err);
                callback(result.comments);
            });
        });
    }
}

module.exports = db;
