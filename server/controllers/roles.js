const models = require("../db/models");
const { defaultPost, defaultPut, defaultDelete } = require("../utils/db");

const model = models.role;

const post = async (req, res) => {
  const { body } = req;
  res.status(200).send(await defaultPost(null, body, model));
};

const get = async (req, res) => {
  res.status(200).send(
    await model.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    })
  );
};

const put = async (req, res) => {
  const { body } = req;
  res.status(200).send(await defaultPut(null, body, model));
};

const del = async (req, res) => {
  const { body } = req;
  res
    .status(200)
    .send(await defaultDelete(null, body, model, () => ({ id: body.id })));
};

const { checkMethod } = require("../utils");

module.exports = (router, moduleName) => {
  router.post("/", checkMethod(post, moduleName));
  router.get("/", checkMethod(get, moduleName));
  router.put("/", checkMethod(put, moduleName));
  router.delete("/", checkMethod(del, moduleName));
};
