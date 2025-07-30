import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connectionInstantance = await mongoose.connect(
      `${process.env.MONGOOSE_URI}/${DB_NAME}`
    );
    console.log(
      `Database connected successfully: ${connectionInstantance.connection.host}`
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default ConnectDB;
