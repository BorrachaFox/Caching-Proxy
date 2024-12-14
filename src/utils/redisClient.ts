import Redis from 'ioredis';

export const redisClient = new Redis({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", (err: any) => {
  console.error("Redis Client Error", err);
});


