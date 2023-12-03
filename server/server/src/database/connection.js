import { Sequelize } from "sequelize";
import config from "../config";

//config
const postgresConnection = new Sequelize({
  dialect: "postgres",
  host: config.postgres.host,
  username: config.postgres.username,
  password: config.postgres.password,
  port:config.postgres.port,
  database: config.postgres.database,
});

export default postgresConnection;