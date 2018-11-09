const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const actionDb = require('./data/helpers/actionModel');
const projectDb = require('./data/helpers/projectModel');

const server = express();

server.use(express.json());
server.use(helmet()); 
server.use(morgan('tiny')); 

server.get('/', (req, res) => {
    res.json('Home');
  });
  
// ACTION MODEL CRUD
server.get('/api/actions', (req, res) => {
    actionDb.get()
      .then(actions => {
        console.log('\n*** actions ***', actions);
        res.status(200).json(actions);
      })
        .catch(err => res.status(500).json({ error: "The actions could not be retrieved. "}))
    })


// PROJECT MODEL CRUD
server.get('/api/projects', (req, res) => {
    projectDb.get()
      .then(projects => {
        console.log('\n*** projects ***', projects);
        res.status(200).json(projects);
      })
      .catch(err => res.status(500).json({ error: "The projects could not be retrieved. "}))
    })






const port = process.env.PORT || 7290
server.listen(port, () => console.log(`\n== Party at port ${port} ==\n`));