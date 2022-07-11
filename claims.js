const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/all", (req, res, next) => {
  return res.status(200).json({
    message: "Get all claims",
  });
});

// get one claim
app.get("/one/:id", (req, res, next) => {
  return res.status(200).json({
    message: `Get one claim with ID ${req.params.id}`,
  });
});

app.put("/:claim_id?", (req, res, next) => {
  const message = req.params.claim_id
    ? `Upadte claim with ID ${req.params.claim_id}`
    : "Create a new claim";
  return res.status(200).json({ message });
});

// not found handler
app.use((req, res, next) => res.status(404).json({ error: "Not Found" }));

// export serverless
module.exports.handler = serverless(app);
