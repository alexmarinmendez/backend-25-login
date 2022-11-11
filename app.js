import express from 'express'
import session from 'express-session'

const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

let baseSession = session({
    secret: 'c0d3r',
    resave: false,
    saveUninitialized: false
})

app.use(express.json())
app.use(baseSession)
app.use(express.static('public'))

let users = []

app.post('/register', (req, res) => {
    let user = users.find(item => item.name === req.body.name)
    if (user) return res.status(400).send({err: 'User already exists'})
    users.push(req.body)
    console.log('Backend => ', users)
})