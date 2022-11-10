import React from 'react';
import playAudio from '../functions/playAudio';
import $ from 'jquery';

class DrumpadButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        document.getElementById(this.props.currentLetter).play();
        /*playAudio(this.props.fileLocation);*/
        this.setState({
            active: true
        })
        this.props.display(this.props.label);

        setTimeout(() => this.setState({active: false}), 150);
      }

    componentDidUpdate(){
        this.state.active ? $(document.getElementById(this.props.id)).css("background-color", "red") :
                            $(document.getElementById(this.props.id)).css("background-color", "white");
    }

    componentWillUnmount(){               //THIS WOULD BE USEFUL IF YOU WANTED TO SWITCH BETWEEN SETS OF SOUNDS
        this.props.currentLetter = ''
    }

    render(){
        return(
        <>
            <button id={this.props.id} currentLetter={this.props.currentLetter} label={this.props.label} 
            type='button' className="col-3 btn border drum-pad" onClick={() => {this.handleClick()}}>
                <audio id={this.props.currentLetter} className='clip' src={this.props.fileLocation}></audio>
                {this.state.active ? <div style={{color: 'white'}} className='text-center'><span id='button-label'>{this.props.id}</span></div> : this.props.currentLetter}
            </button>
        </>
        )
    }
}

export default DrumpadButton;