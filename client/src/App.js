import React, { Component } from 'react';
import axios from 'axios'
import Projects from './Projects'
import Actions from './Actions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      actions: []
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:7290/api/projects')
    .then(response => {
      this.setState({
        projects: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
    axios
    .get('http://localhost:7290/api/actions')
    .then(response => {
      this.setState({
        actions: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })

    
  }

  render() {
    return (
      <div className="App">
        <h2>Projects</h2>
      <Projects projects={this.state.projects} />
      <h2>Actions</h2>
      <Actions actions={this.state.actions} />
      </div>
    );
  }
}

export default App;
