import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  state = {
    name: 'Dragaon ball',
    idade: 15,
    Protagonista: 'Goku'
  }

  click = () => {
    this.setState({ name: 'Junior' })
  }

  render() {
    const { name } = this.state
    const { idade } = this.state
    const { Protagonista } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.click}>
            nome do anime: {name}
          </p> <br />
          <p>idade do anime: {idade}</p><br />
          <p>Protagonista: {Protagonista}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}

export default App;
