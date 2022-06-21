const def = (db, DataTypes, options) => {
  const model = db.define(
    "media",
    {
      caption: DataTypes.TEXT,
      description: DataTypes.TEXT,
      src: DataTypes.TEXT,
    },
    options
  );
  return model;
};

module.exports = def;
