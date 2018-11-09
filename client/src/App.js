import React, { Component } from 'react';
import axios from 'axios'
import Projects from './Projects'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
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
  }

  render() {
    return (
      <div className="App">
      <Projects projects={this.state.projects} />

      </div>
    );
  }
}

export default App;
