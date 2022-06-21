const def = (db, DataTypes, options) => {
  const model = db.define(
    "user",
    {
      caption: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    options
  );
  model.associate = (models) => {
    model.belongsTo(models.role, {
      foreignKey: "roleId",
      as: "role",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
    model.belongsTo(models.service, {
      foreignKey: "serviceId",
      as: "service",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
  };
  return model;
};

module.exports = def;
