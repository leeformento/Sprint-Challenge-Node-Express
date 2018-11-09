const express = require('express');

const configureMiddleware = require('./config/middleware.js')
const projectDb = require('./data/helpers/projectModel');

const server = express();

const actionRoutes = require('./actions/actionRoutes.js')
configureMiddleware(server);


server.use('/api/actions', actionRoutes);



server.get('/', (req, res) => {
    res.json('Home');
  });



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

server.post('/api/projects', (req, res) => {
    const { name, description } = req.body;
    const newAction = { name, description };
    projectDb.insert(newAction)
      .then( newProject => {
        console.log('\n*** projects ***', newProject);
        res.status(200).json(newProject);
      })
      .catch(err => res.status(500).json({ error: "This project could not be added. "}))
})
    
server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    projectDb.remove(id)
      .then(projectRemoved => {
        res.status(200).json(projectRemoved);
      })
      .catch(err => { res.status(500).json({ error: "This project could not be deleted."});
      });
  })
  
  server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const editProject = { name, description }
    projectDb.update(id, editProject)
      .then(projectEdit => {
        console.log('\*** project edit****', editProject);
        projectEdit
          .get(id)
          .then(project => {
            res.status(200).json(project)
          });
      })
      .catch(err => res.status(500).json({ error: "The project information could not be modified." }));
})




const port = process.env.PORT || 7290
server.listen(port, () => console.log(`\n== Party at port ${port} ==\n`));