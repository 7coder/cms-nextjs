import sqlite3 from "sqlite3";
import { open } from "sqlite";

const setup = async () => {
  const db = await open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });
  await db.migrate();
};

setup();
