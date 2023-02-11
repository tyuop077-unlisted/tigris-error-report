import { loadEnvConfig } from "@next/env";
import { Tigris } from "@tigrisdata/core";
import { Test } from "../src/db/models/test";

async function main() {
  loadEnvConfig(process.cwd());

  const tigrisClient = new Tigris();
  await tigrisClient.registerSchemas([Test]);
}

main()
  .then(async () => {
    console.log("Setup complete");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });

export {}
