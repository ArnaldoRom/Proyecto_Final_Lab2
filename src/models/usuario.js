import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Usuario extends Model {}

Usuario.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreUsuario: {
      type: DataTypes.STRING,
    },
    contrasena: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.TINYINT,
    },
  },
  {
    sequelize,
    modelName: "usuario",
    tableName: "usuario",
    timestamps: false,
  }
);
