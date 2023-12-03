import { DataTypes } from "sequelize";
import postgresConnection from "../database/connection";


const Issue = postgresConnection.define(
  "Issue",
  {
    // Model attributes are defined here
    issue_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reported_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commencement_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Issue;
