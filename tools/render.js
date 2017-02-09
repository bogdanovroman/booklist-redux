const db = require('./db');

var render = {
  cleanLayout: function(req, res){
    res.render('index',{
      title:'Best books of',
    })
  }
}
module.exports = render;
