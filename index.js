const express = require('express')
const app = express()
const port = 3000
const post = require('./db/posts.json')

app.set ('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/games', (req, res) => {
    res.render('games')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/api/v1/posts', (req, res) => {
    res.status(200).send(post)
})

app.get('/api/v1/posts/:id', (req, res) => {
    const post = post.find(i => i.id = req.params.id)
    res.status(200).send(post)
})

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})