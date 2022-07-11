const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from the general root!",
  });
});

// not found handler
app.use((req, res, next) => res.status(404).json({ error: "Not Found" }));

// export serverless
module.exports.handler = serverless(app);