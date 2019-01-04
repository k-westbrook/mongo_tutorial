const router = require('express').Router()
const { User } = require('../db')

router.post('/newUser', async (req, res, next) => {
  try {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email
    })
    newUser.save();
    console.log(newUser, "USER")
    res.json(newUser);

  } catch (err) {
    next(err)
  }
})


router.get('/allUsers', async (req, res, next) => {
  try {

    const foundUsers = await User.find();

    res.json(foundUsers);

  } catch (err) {
    next(err)
  }
})

module.exports = router;
