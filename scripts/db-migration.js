const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const setup = async () => {
  console.log("Migration: Start..");
  try {
    const db = await open({
      filename: "./db.sqlite",
      driver: sqlite3.Database,
    });
    await db.migrate({ force: true });
    console.log("Migration: Success!");
  } catch (error) {
    console.log(error);
  }
};

setup();
