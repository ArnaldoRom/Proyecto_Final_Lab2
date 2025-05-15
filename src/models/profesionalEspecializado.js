import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class ProfesionalEspecializado extends Model {}

ProfesionalEspecializado.init(
  {
    idProfesionalEspecializado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idProfesional: {
      type: DataTypes.INTEGER,
      references: {
        model: "profesional",
        key: "idProfesional",
      },
    },
    idEspecialidad: {
      type: DataTypes.INTEGER,
      references: {
        model: "especialidad",
        key: "idEspecialidad",
      },
    },
  },
  {
    sequelize,
    modelName: "profesionalEspecializado",
    tableName: "profesionalEspecializado",
    timestamps: false,
  }
);
