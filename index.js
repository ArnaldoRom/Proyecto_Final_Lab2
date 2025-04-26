import { app } from "./src/app.js";
import { sequelize } from "./src/config/db.js";

const port = process.env.PORT || 3000;

async function iniciarServer() {
  try {
    await sequelize.authenticate();
    console.log("Se conecto a la base de datos con exito!!");
    app.listen(port, () => {
      console.log("ESTAMOS EN LINEA 😎😎 🤙");
    });
  } catch (error) {
    console.error("Error con la conexion hacia la base de datos");
  }
}

iniciarServer();
