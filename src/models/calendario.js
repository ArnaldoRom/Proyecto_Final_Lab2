import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Calendario extends Model {}

Calendario(
  {
    idCalendario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: { type: DataTypes.STRING },
    diasNoLaborables: { type: DataTypes.DATE },
    fechaInicio: { type: DataTypes.DATE },
    fechaFin: { type: DataTypes.DATE },
    estado: { type: DataTypes.TINYINT },
  },
  {
    sequelize,
    modelName: "calendario",
    tableName: "calendario",
    timestamps: false,
  }
);
