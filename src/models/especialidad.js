import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Especialidad extends Model {}

Especialidad.init(
  {
    idEspecialidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreEsp: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.TINYINT,
    },
  },
  {
    sequelize,
    modelName: "especialidad",
    tableName: "especialidad",
    timestamps: false,
  }
);
