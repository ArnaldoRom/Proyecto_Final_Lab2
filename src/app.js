import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("HOLAAAAAA");
});

app.get("/employees", (req, res) => res.send("Obteniendo empleados"));
app.post("/employees", (req, res) => res.send("Creando empleados"));
app.put("/employees", (req, res) => res.send("Actualizando empleados"));
app.delete("/employees", (req, res) => res.send("Eliminando empleados"));
