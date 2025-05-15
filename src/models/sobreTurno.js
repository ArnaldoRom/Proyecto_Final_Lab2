import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class SobreTurno extends Model {}

SobreTurno.init(
  {
    idSobreTurno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hora: {
      type: DataTypes.TIME,
    },
    idPaciente: {
      type: DataTypes.INTEGER,
      references: {
        model: "paciente",
        key: "idPaciente",
      },
    },
    idAgenda: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "sobreTurno",
    tableName: "sobreTurno",
    timestamps: false,
  }
);
