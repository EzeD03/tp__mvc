const express = require("express");
const app = express();

const port = 3030;

const mainRouter = require("./routers/main");

/* Recursos estáticos */
app.use(express.static("public"));

/* Rutas */
app.listen(port, () => console.log(`Server running in http://localhost:${port}`));

app.use("/", mainRouter);