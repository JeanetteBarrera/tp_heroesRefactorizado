// Require de Express
const express = require("express");

// Require de FS
//const fs = require("fs");

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


const heroesRoute = require("./routes/heroes");
const mainRoute = require("./routes/main");

app.use("/", mainRoute);
app.use("/", heroesRoute);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
