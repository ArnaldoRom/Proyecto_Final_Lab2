import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Sucursal extends Model {}

Sucursal.init(
  {
    idSucursal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreSuc: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    clasificacion: { type: DataTypes.INTEGER },
    estado: { type: DataTypes.TINYINT },
  },
  {
    sequelize,
    modelName: "sucursal",
    tableName: "sucursal",
    timestamps: false,
  }
);
