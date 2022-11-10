import React from 'react';        
import DrumpadButton from './Button.js'
import {sounds} from '../drum_sounds/Sounds.js';    //Array of our sounds as objects, {[fileLocation: locationOfMp3, name: nameOfSound], etc}
import '../styles/App.css';

const keys = ['Q','W','E','A','S','D','Z','X','C']; 

class Drumpad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arrayOfMp3s: sounds,             //state contains the array of our sound objects
      currentSound: ''
    }         
    this.renderButtons = this.renderButtons.bind(this); 
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

/*CREATE BUTTON LAYOUT DURING MOUNT INSIDE #DRUMPAD-BOTTOM, ASSIGN ONCLICK METHOD AND LABEL/ID FOR EACH BUTTON*/
  renderButtons() { 
    const mp3s = this.state.arrayOfMp3s;         //An array of soundObjects contained within state

    return(                                      //Render a button for each soundObject in grid fashion
      <div id='buttonRow' className="row">
      {
        mp3s.map((soundObject, index) => {       //Do function for each soundObject in array, idx is the current soundObjects' index in array ie: [0],[1],[2]
          let letter = keys[index];
          return (
          <DrumpadButton key={letter} display={this.handleDisplay} label={soundObject.label} id={soundObject.label} currentLetter={letter} fileLocation={soundObject.fileLocation} />
          )}
        ) 
      }      
      </div>
    )
  }
/*END OF RENDERING BUTTON LAYOUT*/


/*WHEN COMPONENT MOUNTS, LOOK FOR KEYS PRESSED*/
componentDidMount(){                                        
  document.addEventListener('keydown', this.handleKeyPress) //handleKeyPress() anytime a button is pressed
}
/*END OF LOOKING FOR ANY KEYS PRESSED*/


/*WHEN A KEY IS PRESSED, CHECK TO SEE IF THAT KEY IS ONE OF OUR BUTTONS KEYS, IF IT IS, SELECT AND PLAY THAT BUTTONS*/
handleKeyPress = (e) => {                 //Takes an event(like a key press) as perameter, event.key will tell us what key was pressed
let currentKey = e.key.toUpperCase();     //Uppercase the key that was pressed before checking to see if it is in our array of keys
  if(keys.indexOf(currentKey) !== -1){    //If the pressed key is one of our button keys...
    let currentButton = document.querySelector(`[currentLetter=${CSS.escape(currentKey)}]`);  //Select button with an ID equal to the key that was pressed and assign it to currentButton
    currentButton.click()                 //Simulate clicking that button
  }
}
/*END OF CHECKING PRESSED KEY*/


/*DISPLAY THE CURRENT SOUND BEING PRESSED*/
 handleDisplay(label){
    this.setState({
      currentSound: label
    })
  }
/*END OF DISPLAYING SOUND*/

render(){               //Initial layout that will render the buttons inside it using renderButton() method
  return (
      <div id='drum-machine' className='container d-flex justify-content-center align-items-center bg-primary'>
          <div id='drumpad-header' className='container'>
            <div id='drumpad-display' className='container mb-2'>
              <h1 id='drumpad-title'>BeatMaster3000</h1>
            </div>
            <div id='drumpad-bottom' className='container'>
                {this.renderButtons()}
            </div>
            <div id='display' className='mt-3 text-center'><h2 className='bg-light m-auto w-50 text-center'>{this.state.currentSound}</h2>
            </div>
          </div>
      </div>
  );
}
}

export default Drumpad;
