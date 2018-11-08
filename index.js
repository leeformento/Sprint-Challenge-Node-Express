const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet()); 
server.use(morgan()); 

// ACTION MODEL CRUD




// PROJECT MODEL CRUD





const port = process.env.PORT || 7290
server.listen(port, () => console.log(`\n== Party at port ${port} ==\n`));