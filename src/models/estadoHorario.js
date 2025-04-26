import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class EstadoHorario extends Model {}

EstadoHorario.init(
  {
    idEstadoHorario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "especialidad",
    tableName: "especialidad",
    timestamps: false,
  }
);
