const router = require('express').Router()

router.get('/allUsers', async (req, res, next) => {
  try {

    console.log('test');

  } catch (err) {
    next(err)
  }
})

module.exports = router;
