var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  console.log('teste')
  res.json({
    name: "Hospital Metropolitano da Lapa",
    total_rooms: 800,
    empty_rooms: 150,
    in_use_rooms: 650,
    updated_at: new Date().toISOString()
  })
});

module.exports = router;
