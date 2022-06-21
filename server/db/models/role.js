const def = (db, DataTypes, options) => {
  const model = db.define(
    "role",
    {
      caption: DataTypes.TEXT,
      description: DataTypes.TEXT,
      level: DataTypes.INTEGER,
    },
    options
  );
  return model;
};

module.exports = def;
