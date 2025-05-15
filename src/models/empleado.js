import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export class Empleado extends Model {}

Empleado.init(
  {
    idEmpleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreEmp: {
      type: DataTypes.STRING,
    },
    apellidoEmp: {
      type: DataTypes.STRING,
    },
    legajo: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.TINYINT,
    },
    idSucursal: {
      type: DataTypes.INTEGER,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "empleado",
    tableName: "empleado",
    timestamps: false,
  }
);
