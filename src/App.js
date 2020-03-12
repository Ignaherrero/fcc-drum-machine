import React from 'react';
import './App.css';
import Pad from './Components/Pad';
import Display from "./Components/Display";
import ControlPanel from "./Components/ControlPanel";
// sonidos:
const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];
//Estos son diferentes sonidos:
const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: 0.50,
      power: true,
      id: "",
      choseSound: "BankOne",
      display: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.switchPower = this.switchPower.bind(this);
    this.switchSound = this.switchSound.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  handleVolumeChange(e) {
    this.setState({
      volume: e.target.value,
      display: Math.floor(e.target.value * 100)
    })
    setTimeout(() => this.setState({
      display: String.fromCharCode(160)
    }), 1000);
  }
  switchPower() {
    this.setState(state => ({
      power: !state.power,
      display: !this.state.power ? "On" : "Off"
    }));
    setTimeout(() => this.setState({
      display: String.fromCharCode(160)
    }), 500);
  }
  switchSound() {
    if (this.state.power) {
      this.setState(state => ({
        choseSound: state.choseSound === "BankOne" ? "BankTwo" : "BankOne",
        display: state.choseSound === "BankOne" ? "BankTwo" : "BankOne"
      }))
      setTimeout(() => this.setState({
        display: String.fromCharCode(160)
      }), 500);
    }
  }

  handleClick(downKeyTrigger) {
    let key;
    key = bankOne.find(({ keyTrigger }) => keyTrigger === downKeyTrigger);
    this.playSound(key.keyTrigger);
  }

  handleKeyPress(e) {
    let key;
    key = bankOne.find(({ keyCode }) => keyCode === e.keyCode);
    if (typeof key !== 'undefined') {
      this.playSound(key.keyTrigger);
    }
  }

  playSound(key) {
    if (this.state.power) {
      const sound = document.getElementById(key);
      sound.volume = this.state.volume;
      sound.currentTime = 0;
      sound.play();
      const { id } = this.state.choseSound === "BankOne" ? bankOne.find(({ keyTrigger }) => keyTrigger === sound.id) 
      : 
      bankTwo.find(({ keyTrigger }) => keyTrigger === sound.id);
      this.setState({
        display: id
      })
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  render() {
    return (
      <div id="container">
        <div id="drum-machine">
          <Display display={this.state.display} />
          <ControlPanel 
            switchSound={this.switchSound} 
            switchPower={this.switchPower} 
            handleVolumeChange={this.handleVolumeChange} 
            volume={this.state.volume} />
          <div id="drum-pad">
            <ul>
              {this.state.choseSound === "BankOne" ? bankOne.map((tecla) =>
                // Boton con sonido 1
                <li key={tecla.keyCode}>
                  <Pad
                    tecla={tecla}
                    handleClick={this.handleClick}>
                  </Pad>
                </li>
                // Boton con sonido 2
              ) : bankTwo.map((tecla) =>
                <li key={tecla.keyCode}>
                  <Pad
                    tecla={tecla}
                    handleClick={this.handleClick}>
                  </Pad>
                </li>
              )
              }
            </ul>
          </div>
        </div >
      </div >
    );
  }
}
export default App;
