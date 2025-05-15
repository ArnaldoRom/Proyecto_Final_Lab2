import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Turno extends Model {}

Turno.init(
  {
    idTurno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    diaTurno: {
      type: DataTypes.STRING,
    },
    hora: {
      type: DataTypes.TIME,
    },
    clasificacion: {
      type: DataTypes.STRING,
    },
    motivoConsulta: {
      type: DataTypes.STRING,
    },
    idPaciente: {
      type: DataTypes.INTEGER,
    },
    idAgenda: {
      type: DataTypes.INTEGER,
    },
    idListaEspera: {
      type: DataTypes.INTEGER,
    },
    idEstadoHorario: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "turno",
    tableName: "turno",
    timestamps: false,
  }
);
