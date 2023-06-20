"use strict";


var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var db = {};
require('../config/config');
require("../config/constant");

  let sequelize = new Sequelize(
    CONFIG.db_name,
    CONFIG.db_user,
    CONFIG.db_password,
    {
      host: CONFIG.db_host,
      dialect: 'postgres',
      port: CONFIG.db_port,
      logging: false,
      define: {
        timestamps: false,
        underscored: true,
      },
      pool: {
        max: Number(CONFIG.max_pool_conn),
        min: Number(CONFIG.min_pool_conn),
        idleTime: CONFIG.conn_idle_time,
      },
      dialectOptions: {
        useUTC: true,
      },
    }
  );
  const schemaCreate = async function () {
    const test = [];
    var schemas = await sequelize.showAllSchemas().then(
      (s) => {
        CONSTANT.SCHEMAS.forEach((item) => {
          if (s.indexOf(item) < 0) {
            sequelize.createSchema(item).then((res) => { });
          }
        });
      },
      (err) => {
        console.log("in err", err);
      }
    );
    return schemas;
  };

  CONSTANT.SCHEMAS.forEach((item) => {
    fs.readdirSync(__dirname + "/" + item)
      .filter((file) => {
        return (
          file.indexOf(".") !== 0 &&
          file !== basename &&
          file.slice(-3) === ".js"
        );
      })
      .forEach((file) => {
        var model = require(path.join(__dirname + "/" + item, file))(
          sequelize,
          Sequelize.DataTypes
        );
        db[file.slice(0, -3)] = model;
      });
  });
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].association) {
      db[modelName].association(db);
    }
  });
  db.schemaCreate = schemaCreate();
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

module.exports = db;