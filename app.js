const express = require("express");

const infoRouter = require("./routes/infoRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/infos", infoRouter);

module.exports = app;
