import React, { Component } from 'react';
import kelpy from './kelpy.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>
            The Music Theory App
          </h4>
          <img src={kelpy} className="kelpy" alt="it's kelpy"/>
        </header>
        <body>
          <h1>
            [CDEFGAB]
          </h1>
          <h1>
            [I III V VII][♮ ♭ ♯]
          </h1>

          <h3>
            <button class="root">C</button>
            <button class="root">D</button>
            <button class="root">E</button>
            <button class="root">F</button>
            <button class="root">G</button>
            <button class="root">A</button>
            <button class="root">B</button>
            <br></br>
            <br></br>
            <button class="accidental">♭</button>
            <button class="accidental">♮</button>
            <button class="accidental">♯</button>
           </h3>
          <h2>
            <button class="check">check</button>
          </h2>
          <h5>
            sí, correcto!
          </h5>
          <h6>
            no, incorrecto!
          </h6>
        </body>
      </div>
    );
  }
}

export default App;

