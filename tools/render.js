const db = require('./db');

var render = {
  cleanLayout: function(req, res){
    res.render('index',{
      title:'Books',
    })
  }
}
module.exports = render;
