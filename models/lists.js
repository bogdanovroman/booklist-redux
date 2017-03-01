var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
    title: {
        type: String,
        default : ''
    },
    author: {
      type: String
    },
    description: {
        type: String,
        default: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.'
    },
    items: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: {
      type: Array,
      default: [
        {
          author : '',
          date : Date.now,
          text : '',
          to : ''
        }
      ]
    }
});

var List = mongoose.model('List', listSchema);

module.exports = mongoose.model('List', listSchema);

// List.remove({ name: 'qwe' }, function (err) {
//   if (err) return handleError(err);
//   console.log('removed');
// });
// var qqq = new List({
//           name: '123',
//           items: [
//             {
//               author: 'wqewqe',
//               title: 'sadasd'
//             },
//             {
//               author: 'wqew123qe',
//               title: '11111'
//             }
//           ]
//              }).save(function(err) {
//             if (err)
//                 return handleError(err);
//             }
//         )
