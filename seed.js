const { db, User, Event } = require('./server/db')

const seed = async () => {
  try {
    await db.sync({ force: true })
    await User.create({
      firstName: 'Cody',
      lastName: 'Pug',
      email: 'cody@email.com',
      password: '12345',
    })
    await Event.create({
      title: 'Potluck1',
      admin: 1,
      guests: [],
      password: '12345',
    })
    console.log(`
      Seed success!
    `)
    db.close()
  } catch (err) {
    console.error(`
      Oh noes!
    `)
    console.error(err.stack)
    db.close()
  }
}

seed()
