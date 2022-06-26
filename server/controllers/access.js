const { checkMethod, sleep } = require("../utils");

const defMenu = [
  { name: "andrey", caption: "Andrey", icon: "directions_walk" },
  { name: "GRAND", caption: "GRAND", icon: "self_improvement" },
  { name: "viktor", caption: "Виктор", icon: "emoji_people" },
  { name: "viktoria", caption: "Виктория", icon: "pool" },
  { name: "luta", caption: "Лута", icon: "sensor_occupied" },
  { name: "hstop", caption: "hstop", icon: "local_fire_department" },
  { name: "chats", caption: "chats", icon: "forum" },
  { name: "test", caption: "test", icon: "cruelty_free" },
];
const defSettings = [
  { name: "translation", caption: "translation", icon: "translate" },
];

const get = async (req, res) => {
  res.status(200).send({ route: defMenu, routeSetting: defSettings });
};

module.exports = (router, moduleName) => {
  // model = models[moduleName];
  router.get("/", checkMethod(get, moduleName));
};
