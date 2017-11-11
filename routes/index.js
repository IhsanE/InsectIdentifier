var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.sendFile(path.join(__dirname + 'dist/index.html'))
})

module.exports = router
