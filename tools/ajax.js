const db = require('./db');
var ajax = {
    getAllLists: function(req, res) {
        db.getAllLists(req, res, function(all_lists) {
            res.end(JSON.stringify(all_lists));
        })
    },
    getAllUsers: function(req, res) {
        db.getAllUsers(req, res, function(all_users) {
            res.end(JSON.stringify(all_users));
        })
    },
    postNewList: function(req, res) {
        db.createNewList(req, res, function(result) {
            res.end('list ' + result);
        })
    },
    postNewUser: function(req, res) {
        db.getAllUsers(req, res, function(all_users) {
            var isNew = true;
            for (var i = 0; i < all_users.length; i++) {
                if (req.body.id != all_users[i].id) {
                    console.log('is new');
                    isNew = true;
                } else {
                    console.log('exist');
                    isNew = false;
                    break;
                }
            }
            if (isNew) {
                db.createNewUser(req, res, function(result) {
                    res.end('user ' + result);
                })
            }
        })

    },
    getAllListsWithUserData: function(req, res) {
        db.getAllLists(req, res, function(all_lists) {
            db.getAllUsers(req, res, function(all_users) {
                var result = [];
                for (var i = 0; i < all_lists.length; i++) {
                    var newList = Object.assign({}, all_lists[i]._doc),
                        newUserData = {};
                    for (var j = 0; j < all_users.length; j++) {
                        if (newList.author === all_users[j].id) {
                            newUserData = all_users[j];
                        }
                    }
                    newList.userData = {
                        "name": newUserData.name,
                        "url": newUserData.url
                    };
                    result.push(newList);
                }
                res.end(JSON.stringify(result));
            })
        })
    },
    getCurrentUser : function(req, res){
        db.getCurrentUser(req, res, function(user){
            console.log(user);
            res.end(JSON.stringify(user));
        })
    }
}

module.exports = ajax;
