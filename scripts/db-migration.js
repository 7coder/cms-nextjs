const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const setup = async () => {
  const db = await open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });
  await db.migrate({ force: true });
};

setup();
