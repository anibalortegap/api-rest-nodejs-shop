'use strict';

const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db, config.dbOpts, (err, res) => {
	if (err) {
		return console.log(`Error al conectar la base de datos: ${err}`)
	}
	console.log('Conexión a la base de datos establecida exitosamente...');
	
	app.listen(config.port,() =>{
		console.log(`Project API REST running in http://localhost:${ config.port }`);
	});
});
