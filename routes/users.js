// CRUD application (or GET, POST, DELETE, PATCH)
const express = require('express')
const router = express.Router()

router.use(logger)

// All Users route
router.get('/', (req, res) => {
    console.log(req.query.name)
    res.render('users/index')
})

// New User route - only displays form
router.get('/new', (req, res) => {
    res.render('users/new')
})

// Create new user
router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push ({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    }
})

// Aggregate all API METHODS for ID queries
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User by ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User by ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User by ID ${req.params.id}`)
    })
// Make sure to put any and all static routes above the dynamic routes

const users = [{ name: "Anza" }, { name: "Ali" }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router