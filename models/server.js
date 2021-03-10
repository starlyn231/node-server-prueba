const express = require("express");
var cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //middlewares
    this.middlewares();
    //Rutas de mi APP
    this.routes();
  }
  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
    this.app.use(cors());

    // Lectura Y Parseo del body
    this.app.use(express.json());
  }
  routes() {
    this.app.use("/api/usuarios", require("../routes/usuarios"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Corriendo En Puerto: ", this.port);
    });
  }
}

module.exports = Server;
