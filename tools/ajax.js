const db = require('./db');
var ajax = {
    // получить все списки
    getAllLists: function(req, res) {
        db.getAllLists(req, res, function(all_lists) {
            res.end(JSON.stringify(all_lists));
        })
    },
    // получить всех юзеров
    getAllUsers: function(req, res) {
        db.getAllUsers(req, res, function(all_users) {
            res.end(JSON.stringify(all_users));
        })
    },
    // добавить новый список в базу +
    // обновить массив списков у юзера
    postNewList: function(req, res) {
        db.createNewList(req, res, function(id) {
            db.updateUserListsScope(req, res, id, function(result){
              res.end(JSON.stringify(id));
            })
        })
    },
    // добавить нового юзера в дб +
    // проверить нет ли такого уже
    postNewUser: function(req, res) {
        db.getAllUsers(req, res, function(all_users) {
            db.createNewUser(req, res, function(newUser) {
                res.end(JSON.stringify(newUser));
            })
        })
    },
    // получить данные о списках +
    // получить данные о всех юзерах +
    // добавить информацию о юзере в объект списка
    getAllListsWithUserData: function(req, res) {
        db.getAllLists(req, res, function(all_lists) {
            db.getAllUsers(req, res, function(all_users) {
                var result = [];
                for (var i = 0; i < all_lists.length; i++) {
                    var lists = Object.assign({}, all_lists[i]._doc),
                        newUserData = {};
                    for (var j = 0; j < all_users.length; j++) {
                        if (lists.author + '' === all_users[j]._id + '') {
                            newUserData = all_users[j];
                        }
                    }
                    lists.userData = {
                        "name": newUserData.name,
                        "url": newUserData.url,
                        "email" : newUserData.email
                    };
                    result.push(lists);
                }
                res.end(JSON.stringify(result));
            })
        })
    },
    // получить конкретного юзера +
    // получить данные о его списках
    getCurrentUserById : function(req, res){
        db.getCurrentUserById(req, res, function(user){
            db.getCurrentUserListsData(req, res, user, function(listsData){
              var result = {};
              result.user = user;
              result.listsData = listsData;
              res.end(JSON.stringify(result));
            })
        })
    },
    // найти юзера по id фейсбука
    getCurrentUserByFacebookId : function(req, res){
        db.getCurrentUserByFacebookId(req, res, function(user){
            res.end(JSON.stringify(user));
        })
    },
    // найти конкретный список +
    // получить данные о юзере, который его создал
    getCurrentListById : function(req, res){
        db.getCurrentListById(req, res, function(list){
            db.getCurrentListUserData(req, res, list.author, function(userData){
              var result = {};
              result.list = list;
              result.userData = userData;
              res.end(JSON.stringify(result));
            })
        })
    }
}

module.exports = ajax;
