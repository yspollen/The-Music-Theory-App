import React, { Component } from 'react';
import kelpy from './kelpy.png';
import './App.css';

const roots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const notes = [0, 4, 7, 11];
const accidentals = [-1, 0, 1];

var givenRoot;
var givenNote;
var givenAccidental;
var givenPitch;

var givenRootString;
var givenNoteString;
var givenAccidentalString;

var chosenPitch = -1;
var correct = -1;

class App extends Component {
  constructor(props) {
    super(props);
    init();
  }

  noteClicked(event, id) {
    note(id);
  }

  accidentalClicked(event, id) {
    accidental(id);
  }

  checkClicked(event, id) {
    check(id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            The Music Theory App
          </h1>
          <img src={kelpy} className="kelpy" alt="it's kelpy"/>
        </header>
        <div>
          <h3 id="givenNote">
            {givenAccidentalString}{givenNoteString}
          </h3>
          <h2 id="givenRoot">
            {givenRootString}
          </h2>
          <h4>
            <button className="note" id="C" onClick={(e) => {this.noteClicked(e, "C")}}>C</button>
            <button className="note" id="D" onClick={(e) => {this.noteClicked(e, "D")}}>D</button>
            <button className="note" id="E" onClick={(e) => {this.noteClicked(e, "E")}}>E</button>
            <button className="note" id="F" onClick={(e) => {this.noteClicked(e, "F")}}>F</button>
            <button className="note" id="G" onClick={(e) => {this.noteClicked(e, "G")}}>G</button>
            <button className="note" id="A" onClick={(e) => {this.noteClicked(e, "A")}}>A</button>
            <button className="note" id="B" onClick={(e) => {this.noteClicked(e, "B")}}>B</button>
            <br></br>
            <br></br>
            <button className="accidental" id="flat" onClick={(e) => {this.accidentalClicked(e, "flat")}}>b</button>
            <button className="accidental" id="sharp"  onClick={(e) => {this.accidentalClicked(e, "sharp")}}>#</button>
           </h4>
          <h4>
            <button className="check" id="check" onClick={this.checkClicked}>check</button>
          </h4>
          <h5 id="si">
          </h5>
          <h5 id="no">
          </h5>
          <h5 id="br">
            <br></br>
          </h5>
          <h6><br>
            </br><br>
          </br></h6>
        </div>
      </div>
    );
  }
}

function init(){
  givenRoot = Math.floor((Math.random() * 17));
  givenNote = Math.floor((Math.random() * 4));
  givenAccidental = Math.floor((Math.random() * 3));
  newNote();
  toGivenStrings();
};

function toGivenStrings(){
  switch (givenRoot) {
    case 0:
      givenRootString = "C";
      break;
    case 1:
      givenRootString = "C#";
      break;
    case 2:
      givenRootString = "D";
      break;
    case 3:
      givenRootString = "D#";
      break;
    case 4:
      givenRootString = "E";
      break;
    case 5:
      givenRootString = "F";
      break;
    case 6:
      givenRootString = "F#";
      break;
    case 7:
      givenRootString = "G";
      break;
    case 8:
      givenRootString = "G#";
      break;
    case 9:
      givenRootString = "A";
      break;
    case 10:
      givenRootString = "A#";
      break;
    case 11:
      givenRootString = "B";
      break;
    case 12:
      givenRootString = "Db";
      break;
    case 13:
      givenRootString = "Eb";
      break;
    case 14:
      givenRootString = "Gb";
      break;
    case 15:
      givenRootString = "Ab";
      break;
    case 16:
      givenRootString = "Bb";
      break;
    default:
  }

  switch (givenNote) {
    case 0:
      givenNoteString = "I";
      break;
    case 1:
      givenNoteString = "III";
      break;
    case 2:
      givenNoteString = "V";
      break;
    case 3:
      givenNoteString = "VII";
      break;
    default:
  }

  switch (givenAccidental) {
    case 0:
      givenAccidentalString = "b";
      break;
    case 1:
      givenAccidentalString = "";
      break;
    case 2:
      givenAccidentalString = "#";
      break;
    default:
  }
}

function newNote() {
    givenRoot = Math.floor((Math.random() * 17));
    givenNote = Math.floor((Math.random() * 4));
    givenAccidental = Math.floor((Math.random() * 3));
    var givenRootConvert;
    switch (givenRoot) {
      case 12:
        givenRootConvert = 1;
        break;
      case 13:
        givenRootConvert = 3;
        break;
      case 14:
        givenRootConvert = 6;
        break;
      case 15:
        givenRootConvert = 8;
        break;
      case 16:
        givenRootConvert = 10;
        break;
      default:
        givenRootConvert = givenRoot;
      }
    givenPitch = (roots[givenRootConvert] + notes[givenNote] + accidentals[givenAccidental])%12;
};

function note(id) {
    var note;
    switch (id){
      case "C":
        note = 0;
        break;
      case "D":
        note = 2;
        break;
      case "E":
        note = 4;
        break;
      case "F":
        note = 5;
        break;
      case "G":
        note = 7;
        break;
      case "A":
        note = 9;
        break;
      case "B":
        note = 11;
        break;
      default:
    }
    chosenPitch = note;
  };

  function accidental(id){
    var accidental;
    switch (id){
      case "flat":
        accidental = -1;
        break;
      case "sharp":
        accidental = 1;
        break;
      default:
        accidental = 0;
    }
    chosenPitch += accidental;
    chosenPitch = chosenPitch%12;
  };

  function check(id){
    if (givenPitch <= -1) {
      givenPitch += 12;
    }

    if (chosenPitch <= -1) {
      chosenPitch += 12;
    }

    if (chosenPitch === givenPitch) {
      correct = 1;
    }
    else {
      correct = 0;
    }

    if (correct === 1) {
      document.getElementById("si").innerHTML = "sí, correcto";
      document.getElementById("no").innerHTML = "";
      init();
      document.getElementById("givenRoot").innerHTML = givenRootString;
      document.getElementById("givenNote").innerHTML = givenAccidentalString+givenNoteString;
    }
    else if (correct === 0) {
      document.getElementById("si").innerHTML = "";
      document.getElementById("no").innerHTML = "no, incorrecto";
    }

    document.getElementById("br").innerHTML = "";
  };

export default App;

