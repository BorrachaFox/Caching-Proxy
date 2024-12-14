#!/usr/bin/env node
import { Command } from "commander";
import { startProxy } from "./server";
import { redisClient } from "./utils/redisClient";

const program = new Command();

program
  .name("caching-proxy")
  .description("A CLI tool for running a caching proxy server")
  .version("1.0.0", "-V, --version", "show the version number");

program
  .option(
    "-p, --port <port_number>",
    "set the port number for the proxy to run on (default: 8080)"
  )
  .option("-o, --origin <origin_url>", "specify the website URL to be cached")
  .option(
    "-c, --clear-cache",
    "clear the cached data for the specified website"
  );

program.parse();

const options = program.opts();

if (options.port && options.origin) {
  startProxy(options.port, options.origin).catch((err) => {
    console.error("Error starting proxy server:", err);
  });
}

if (options.clearCache) {
  redisClient
    .flushall()
    .then(() => {
      console.log("All cached data cleared successfully.");
    })
    .catch((err) => {
      console.error("Error clearing cache:", err);
    })
    .finally(() => process.exit(0));
}
