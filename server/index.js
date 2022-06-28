require("dotenv").config();
const { Router } = require("express");
const app = require("./config/express")();
const { loader } = require("./utils");
const checkJWT = require("./utils/jwtMiddleware");

loader(
  { path: "./controllers", type: "controller" },
  checkJWT,
  (moduleName) => {
    const router = Router();
    app.use(`/api/${moduleName}`, router);
    return router;
  }
);

app.listen(4000);
