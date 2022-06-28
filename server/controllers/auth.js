const models = require("../db/models");
const { checkMethod, sleep } = require("../utils");
var jwt = require("jsonwebtoken");

// const {
//   defaultPostRouter,
//   defaultDeleteRouter,
//   defaultPutRouter,
//   defaultHelpRouter,
// } = require("../utils/db");

// let model;

const postAuth = async (req, res) => {
  await sleep(4000);
  var token = jwt.sign(
    { id: 100, user: { first: "sacred", last: "sacred" }, role: "admin" },
    process.env["SECRET_TOKEN"]
  );
  res.status(200).send({ isAuth: true, accessToken: token });
};

module.exports = (router, moduleName) => {
  // model = models[moduleName];
  router.post("/", postAuth);

  // defaultHelpRouter(router, model);
  // defaultPutRouter(router, moduleName, model, null);
  // defaultPostRouter(router, moduleName, model, null);
  // defaultDeleteRouter(router, moduleName, model, null);
};
