import { DB, Tigris } from "@tigrisdata/core";

const client = new Tigris();
const db: DB = client.getDatabase();

export default db;
