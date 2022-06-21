const def = (db, DataTypes, options) => {
  const model = db.define(
    "article",
    {
      caption: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    options
  );
  model.associate = (models) => {
    model.belongsTo(models.group, {
      foreignKey: "groupId",
      as: "group",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
  };
  return model;
};

module.exports = def;
