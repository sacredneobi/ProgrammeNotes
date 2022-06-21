const def = (db, DataTypes, options) => {
  const model = db.define(
    "service",
    {
      name: DataTypes.TEXT,
      appId: DataTypes.TEXT,
    },
    options
  );
  return model;
};

module.exports = def;
