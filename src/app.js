import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// comon middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// import routes
import healthCheckRoutes from "./routes/healthcheck.routes.js";

// use routes

app.use("/api/v1/healthcheck", healthCheckRoutes);

export { app };
