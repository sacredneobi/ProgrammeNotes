const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "media", deps: []
 * createTable() => "roles", deps: []
 * createTable() => "services", deps: []
 * createTable() => "groups", deps: [groups]
 * createTable() => "users", deps: [roles, services]
 * createTable() => "articles", deps: [groups]
 * createTable() => "comments", deps: [users, articles, comments]
 * createTable() => "alerts", deps: [articles, users, comments]
 * createTable() => "favorites", deps: [articles, users]
 * createTable() => "linkMedia", deps: [articles, users, comments, media]
 *
 */

const info = {
  revision: 1,
  name: "Init",
  created: "2022-06-18T19:48:55.616Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "media",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        caption: { type: Sequelize.TEXT, field: "caption" },
        description: { type: Sequelize.TEXT, field: "description" },
        src: { type: Sequelize.TEXT, field: "src" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "roles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        caption: { type: Sequelize.TEXT, field: "caption" },
        description: { type: Sequelize.TEXT, field: "description" },
        level: { type: Sequelize.INTEGER, field: "level" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "services",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.TEXT, field: "name" },
        appId: { type: Sequelize.TEXT, field: "appId" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "groups",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        caption: { type: Sequelize.TEXT, field: "caption" },
        description: { type: Sequelize.TEXT, field: "description" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        groupId: {
          type: Sequelize.INTEGER,
          field: "groupId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "groups", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "users",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        caption: { type: Sequelize.TEXT, field: "caption" },
        description: { type: Sequelize.TEXT, field: "description" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        roleId: {
          type: Sequelize.INTEGER,
          field: "roleId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "roles", key: "id" },
          allowNull: true,
        },
        serviceId: {
          type: Sequelize.INTEGER,
          field: "serviceId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "services", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "articles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        caption: { type: Sequelize.TEXT, field: "caption" },
        description: { type: Sequelize.TEXT, field: "description" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        groupId: {
          type: Sequelize.INTEGER,
          field: "groupId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "groups", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "comments",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        caption: { type: Sequelize.TEXT, field: "caption" },
        description: { type: Sequelize.TEXT, field: "description" },
        text: { type: Sequelize.TEXT, field: "text" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        userId: {
          type: Sequelize.INTEGER,
          field: "userId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "users", key: "id" },
          allowNull: true,
        },
        articleId: {
          type: Sequelize.INTEGER,
          field: "articleId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "articles", key: "id" },
          allowNull: true,
        },
        commentId: {
          type: Sequelize.INTEGER,
          field: "commentId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "comments", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "alerts",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        caption: { type: Sequelize.TEXT, field: "caption" },
        description: { type: Sequelize.TEXT, field: "description" },
        view: { type: Sequelize.INTEGER, field: "view" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        articleId: {
          type: Sequelize.INTEGER,
          field: "articleId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "articles", key: "id" },
          allowNull: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          field: "userId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "users", key: "id" },
          allowNull: true,
        },
        commentId: {
          type: Sequelize.INTEGER,
          field: "commentId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "comments", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "favorites",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        articleId: {
          type: Sequelize.INTEGER,
          field: "articleId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "articles", key: "id" },
          allowNull: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          field: "userId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "users", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "linkMedia",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        articleId: {
          type: Sequelize.INTEGER,
          field: "articleId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "articles", key: "id" },
          allowNull: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          field: "userId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "users", key: "id" },
          allowNull: true,
        },
        commentId: {
          type: Sequelize.INTEGER,
          field: "commentId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "comments", key: "id" },
          allowNull: true,
        },
        mediaId: {
          type: Sequelize.INTEGER,
          field: "mediaId",
          onUpdate: "NO ACTION",
          onDelete: "CASCADE",
          references: { model: "media", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["alerts", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["articles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["comments", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["favorites", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["groups", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["linkMedia", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["media", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["roles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["services", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["users", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
