let express = require('express');
let router = express.Router();
let _ = require('underscore');

//Data
const usersData = require('../public/data/users.json');

// localhost:3000/data
router.get('/', function (req, res, next) {
  res.jsonp(usersData);
});

// localhost:3000/data/:id
router.get('/:id', function(req, res, next) {
  // for( let user of usersData){
  //   if(user.id === req.params.id ){
  //     res.jsonp(user);
  //     break;
  //   }
  // }
  const specUser = _.filter(usersData, (user) => user.id === req.params.id);
  res.jsonp(specUser);
});

// localhost:3000/data/:id/:name


module.exports = router;
