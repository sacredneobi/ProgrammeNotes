const def = (db, DataTypes, options) => {
  const model = db.define(
    "comment",
    {
      caption: DataTypes.TEXT,
      description: DataTypes.TEXT,
      text: DataTypes.TEXT,
    },
    options
  );
  model.associate = (models) => {
    model.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
    model.belongsTo(models.article, {
      foreignKey: "articleId",
      as: "article",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
    model.belongsTo(model, {
      foreignKey: "commentId",
      as: "comment",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    });
  };
  return model;
};

module.exports = def;
