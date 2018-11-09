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

server.get('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  actionDb.get(id)
    .then(action=> {
    console.log('\n*** projects ***', action);
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json({ error: "The action with this ID not be retrieved. "}))
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

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  projectDb.get(id)
    .then(project => {
    console.log('\n*** projects ***', project);
      res.status(200).json(project);
    })
    .catch(err => res.status(500).json({ error: "The project with this ID not be retrieved. "}))
})





const port = process.env.PORT || 7290
server.listen(port, () => console.log(`\n== Party at port ${port} ==\n`));