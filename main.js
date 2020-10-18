

// import { MDB } from "./bus/data/dat.js"



const Redis = require("ioredis")
const redis = new Redis("rediss://:hfbv7nctthr2fx6q@db-redis-nyc1-70074-do-user-8136958-0.b.db.ondigitalocean.com:25061")

redis.set("foo", "bar")

redis.get("foo").then(function (result) {
  console.log(result); // Prints "bar|
})


const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('../route/view/index.pug', { title: 'Hey', message: 'Hello there!' })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
