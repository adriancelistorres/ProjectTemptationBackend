
import "reflect-metadata";
import app from "./apps";
import { AppDataSource } from "./databases/db";
require("dotenv").config();
const PORT = process.env.PORT;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("database conected");
    app.listen(3000);
    console.log("server is listening on port", PORT);
  } catch (error) {
    console.log(error);
  }

}

main();
