const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const RATE_LIMIT = 5; // Max requests per window
const WINDOW_SIZE = 60; // Time window in seconds

const rateLimiter = async (req, res, next) => {
    const ip = req.ip;
    const key = `rate_limit:${ip}`;

    let requests = await getAsync(key);
    requests = requests ? parseInt(requests) : 0;

    if (requests >= RATE_LIMIT) {
        return res.status(429).json({ message: 'Too many requests. Try again later.' });
    }

    if (requests === 0) {
        await setAsync(key, 1, 'EX', WINDOW_SIZE);
    } else {
        await setAsync(key, requests + 1);
    }

    next();
};

module.exports = rateLimiter;
