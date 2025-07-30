import { app } from "./app.js";
import dotenv from "dotenv";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 8001;
ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });
