var express = require('express')
var router = express.Router()

/* GET question object. */
router.get('/', async (req, res, next) => {
  res.send('respond with a resource')
})

module.exports = router
