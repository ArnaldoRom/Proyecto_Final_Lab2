import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class ListaEspera extends Model {}

ListaEspera.init(
  {
    idListaEspera: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idPaciente: {
      type: DataTypes.INTEGER,
    },
    idTurno: {
      type: DataTypes.INTEGER,
    },
    idAgenda: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "listaEspera",
    tableName: "listaEspera",
    timestamps: false,
  }
);
