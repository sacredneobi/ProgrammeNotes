const def = (db, DataTypes, options) => {
  const model = db.define(
    "group",
    {
      caption: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    options
  );
  model.associate = (models) => {
    model.belongsTo(model, {
      foreignKey: "groupId",
      as: "group",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
  };
  return model;
};

module.exports = def;
