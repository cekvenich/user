
const Redis = require("ioredis")
const redis = new Redis(
    username = 'default',
    password = 'hfbv7nctthr2fx6q',
    host = 'db-redis-nyc1-70074-do-user-8136958-0.b.db.ondigitalocean.com',
    port = 25061
)

await redis.set("foo", "bar")

