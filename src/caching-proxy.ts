import { Command } from "commander";
import { startProxy } from "./server";
import { redisClient } from "./utils/redisClient";

const program = new Command();

program
  .name("caching-proxy")
  .description("A CLI tool for running a caching proxy server")
  .version("1.0.0");

program
  .option("-p, --port <number>", "Port to run the proxy")
  .option("-o, --origin <link>", "Website to be cached")
  .option("-c, --clear-cache", "Clear cached data");

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
