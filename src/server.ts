import express, { json, Request, Response } from "express";
import { redisClient } from "./utils/redisClient";
import { apiGetter } from "./utils/api-getter";

let base_url: string;

const app = express();

app.get("*", async (req, res) => {
  const route = base_url + req.path;
  const cachedData = await redisClient.get(route);

  res.set("X-Cache", cachedData ? "HIT" : "MISS");

  if (!cachedData) {
    const data = await apiGetter(route);
    await redisClient.setex(route, 3600, JSON.stringify(data));
    res.json(data);
    return;
  }

  const result = JSON.parse(cachedData);

  res.json(result);
  return;
});

export async function startProxy(port: number, url: string) {
  base_url = url;

  app.listen(port, () => {
    console.log(`Proxy server started on port ${port} and caching ${url}`);
  });
}
