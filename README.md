Description
The Rate Limiter API is a Node.js-based service that restricts the number of requests a client can make within a specified time window. It is implemented using Redis for efficient in-memory tracking of client request counts. This helps in preventing DDoS attacks, API abuse, and excessive server load by enforcing controlled access to endpoints.

Features
✅ IP-based rate limiting – Limits requests per unique IP address.
✅ Redis-backed storage – Ensures fast request tracking.
✅ Customizable limits – Set request quotas and time windows.
✅ Express middleware – Easily integrates into any Express application.
✅ Scalable – Supports horizontal scaling when deployed with Redis clusters.

Technologies Used
Node.js – Backend framework
Express.js – Web server
Redis – Fast in-memory storage for tracking requests
dotenv – Manages environment variables
Apache Benchmark (ab) – Used for load testing

How It Works
When a user makes a request, their IP address is checked in Redis.
If the request count is within the allowed limit, it is processed normally.
If the limit is exceeded, a 429 Too Many Requests response is sent.
Request counters are reset after a specified time window.
