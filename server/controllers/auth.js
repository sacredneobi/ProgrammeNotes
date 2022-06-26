const models = require("../db/models");
const { checkMethod, sleep } = require("../utils");
// const {
//   defaultPostRouter,
//   defaultDeleteRouter,
//   defaultPutRouter,
//   defaultHelpRouter,
// } = require("../utils/db");

// let model;

const postAuth = async (req, res) => {
  await sleep(4000);
  res.status(200).send({ isAuth: true });
};

module.exports = (router, moduleName) => {
  // model = models[moduleName];
  router.post("/", postAuth);

  // defaultHelpRouter(router, model);
  // defaultPutRouter(router, moduleName, model, null);
  // defaultPostRouter(router, moduleName, model, null);
  // defaultDeleteRouter(router, moduleName, model, null);
};
