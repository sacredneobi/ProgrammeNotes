const def = (db, DataTypes, options) => {
  const model = db.define("favorite", {}, options);
  model.associate = (models) => {
    model.belongsTo(models.article, {
      foreignKey: "articleId",
      as: "article",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
    model.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
  };
  return model;
};

module.exports = def;
