import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Paciente extends Model {}

Paciente.init(
  {
    idPaciente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombrePac: {
      type: DataTypes.STRING,
    },
    apellidoPac: {
      type: DataTypes.STRING,
    },
    DNI: {
      type: DataTypes.INTEGER,
    },
    obraSocial: {
      type: DataTypes.STRING,
    },
    numCelular: {
      type: DataTypes.INTEGER,
    },
    estado: {
      type: DataTypes.TINYINT,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "paciente",
    tableName: "paciente",
    timestamps: false,
  }
);
