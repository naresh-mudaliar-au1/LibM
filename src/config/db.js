import { connect, connection } from "mongoose";

// We need to define the URL
const CONNECTION_URL = process.env.DB_URL + "libM";
const DATABASE_NAME = process.env.DATABASE_NAME;

connect(CONNECTION_URL);

const db = connection;

db.on("error", (e) => {
  console.error("Error occured in db connection");
});

db.on("open", () => {
  console.log(`DB Connection with ${DATABASE_NAME} established successfully`);
});
