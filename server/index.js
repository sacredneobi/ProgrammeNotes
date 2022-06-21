require("dotenv").config();
const { Router } = require("express");
const app = require("./config/express")();
const { loader } = require("./utils");

loader({ path: "./controllers", type: "controller" }, null, (moduleName) => {
  const router = Router();
  app.use(`/api/${moduleName}`, router);
  return router;
});

app.listen(4000);
