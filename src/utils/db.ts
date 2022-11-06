import sqlite3 from "sqlite3";
import { open } from "sqlite";

const getCur = async () =>
  await open<sqlite3.Database, sqlite3.Statement>({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });

export default {
  getCur,
};
