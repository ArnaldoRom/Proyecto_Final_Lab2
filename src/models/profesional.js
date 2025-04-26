import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Profesional extends Model {}

Profesional.init(
  {
    idProfesional: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombrePro: { type: DataTypes.STRING },
    apellidoPro: { type: DataTypes.STRING },
    estado: { type: DataTypes.TINYINT },
  },
  {
    sequelize,
    modelName: "profesional",
    tableName: "profesional",
    timestamps: false,
  }
);
