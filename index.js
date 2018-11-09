const express = require('express');

const configureMiddleware = require('./config/middleware.js')

const server = express();

const actionRoutes = require('./actions/actionRoutes.js')
const projectRoutes = require('./projects/projectRoutes.js')

configureMiddleware(server);


server.use('/api/actions', actionRoutes);
server.use('/api/projects', projectRoutes);



server.get('/', (req, res) => {
    res.json('Home');
  });



// PROJECT MODEL CRUD



const port = process.env.PORT || 7290
server.listen(port, () => console.log(`\n== Party at port ${port} ==\n`));