import { sequelize } from "../config/db.js";

// Importación de modelos
import { Paciente } from "./Paciente.js";
import { Empleado } from "./Empleado.js";
import { Usuario } from "./Usuario.js";
import { Turno } from "./Turno.js";
import { ListaEspera } from "./ListaEspera.js";
import { Sucursal } from "./Sucursal.js";
import { Agenda } from "./Agenda.js";
import { Calendario } from "./Calendario.js";
import { SobreTurno } from "./SobreTurno.js";
import { EstadoHorario } from "./EstadoHorario.js";
import { Profesional } from "./profesional.js";
import { Especialidad } from "./especialidad.js";
import { ProfesionalEspecializado } from "./profesionalEspecializado.js";

// =======================
// ASOCIACIONES
// =======================

//  Un PACIENTE tiene un USUARIO
Paciente.belongsTo(Usuario, { foreignKey: "idUsuario" });
Usuario.hasOne(Paciente, { foreignKey: "idUsuario" });

//  Un EMPLEADO tiene un USUARIO
Empleado.belongsTo(Usuario, { foreignKey: "idUsuario" });
Usuario.hasOne(Empleado, { foreignKey: "idUsuario" });

// Una SUCURSAL tiene varios EMPLEADOS
Sucursal.hasMany(Empleado, { foreignKey: "idSucursal" });
Empleado.belongsTo(Sucursal, { foreignKey: "idSucursal" });

//  Una SUCURSAL tiene varias AGENDAS
Sucursal.hasMany(Agenda, { foreignKey: "idSucursal" });
Agenda.belongsTo(Sucursal, { foreignKey: "idSucursal" });

// Un CALENDARIO tiene varias AGENDAS
Calendario.hasMany(Agenda, { foreignKey: "idCalendario" });
Agenda.belongsTo(Calendario, { foreignKey: "idCalendario" });

//  Una AGENDA tiene varios TURNOS
Agenda.hasMany(Turno, { foreignKey: "idAgenda" });
Turno.belongsTo(Agenda, { foreignKey: "idAgenda" });

//  Una AGENDA tiene varios SOBRETURNOS
Agenda.hasMany(SobreTurno, { foreignKey: "idAgenda" });
SobreTurno.belongsTo(Agenda, { foreignKey: "idAgenda" });

//  Un TURNO tiene varios SOBRETURNOS
Turno.hasMany(SobreTurno, { foreignKey: "idTurno" });
SobreTurno.belongsTo(Turno, { foreignKey: "idTurno" });

// Un TURNO esta en varias LISTAS DE ESPERA
ListaEspera.hasMany(Turno, { foreignKey: "idListaEspera" });
Turno.belongsTo(ListaEspera, { foreignKey: "idListaEspera" });

//  Una AGENDA tiene varias LISTAS DE ESPERA
Agenda.hasMany(ListaEspera, { foreignKey: "idAgenda" });
ListaEspera.belongsTo(Agenda, { foreignKey: "idAgenda" });

//  Un PACIENTE está en varias LISTAS DE ESPERA
Paciente.hasMany(ListaEspera, { foreignKey: "idPaciente" });
ListaEspera.belongsTo(Paciente, { foreignKey: "idPaciente" });

// Un TURNO esta en varias LISTAS DE ESPERA
Turno.hasMany(ListaEspera, { foreignKey: "idTurno" });
ListaEspera.belongsTo(Turno, { foreignKey: "idTurno" });

//  Un PACIENTE puede tener varios TURNOS
Paciente.hasMany(Turno, { foreignKey: "idPaciente" });
Turno.belongsTo(Paciente, { foreignKey: "idPaciente" });

//  Un ESTADOHORARIO tiene varios TURNOS
EstadoHorario.hasMany(Turno, { foreignKey: "idEstadoHorario" });
Turno.belongsTo(EstadoHorario, { foreignKey: "idEstadoHorario" });

ProfesionalEspecializado.belongsTo(Profesional, {
  foreignKey: "idProfesional",
});
Profesional.hasMany(ProfesionalEspecializado, { foreignKey: "idProfesional" });

ProfesionalEspecializado.belongsTo(Especialidad, {
  foreignKey: "idEspecialidad",
});
Especialidad.hasMany(ProfesionalEspecializado, {
  foreignKey: "idEspecialidad",
});

// Relación N:M entre Profesional y Especialidad a través de ProfesionalEspecializado
Profesional.belongsToMany(Especialidad, {
  through: ProfesionalEspecializado,
  foreignKey: "idProfesional",
  otherKey: "idEspecialidad",
});
Especialidad.belongsToMany(Profesional, {
  through: ProfesionalEspecializado,
  foreignKey: "idEspecialidad",
  otherKey: "idProfesional",
});

//  Un PROFESIONALESPECIALIZADO tiene varias AGENDAS
ProfesionalEspecializado.hasMany(Agenda, {
  foreignKey: "idProfesionalEspecializado",
});
Agenda.belongsTo(ProfesionalEspecializado, {
  foreignKey: "idProfesionalEspecializado",
});

// =======================
// EXPORTACIÓN
// =======================

export {
  sequelize,
  Paciente,
  Empleado,
  Usuario,
  Turno,
  ListaEspera,
  Sucursal,
  Agenda,
  Calendario,
  SobreTurno,
  EstadoHorario,
  Profesional,
  Especialidad,
  ProfesionalEspecializado,
};
