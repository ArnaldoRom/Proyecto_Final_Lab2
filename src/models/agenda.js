import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Agenda extends Model {}

Agenda.init(
  {
    idAgenda: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dia: { type: DataTypes.STRING },
    duracionHorario: { type: DataTypes.TIME },
    hora_Inicio: { type: DataTypes.TIME },
    hora_Fin: { type: DataTypes.TIME },
    limiteTurno: { type: DataTypes.INTEGER },
    idProfesionalEspecializado: {
      type: DataTypes.INTEGER,
    },
    idSucursal: {
      type: DataTypes.INTEGER,
    },
    idCalendario: {
      type: DataTypes.INTEGER,
    },
    estado: { type: DataTypes.TINYINT },
  },
  {
    sequelize,
    modelName: "agenda",
    tableName: "agenda",
    timestamps: false,
  }
);
