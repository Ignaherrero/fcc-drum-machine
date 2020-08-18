import React from "react";

function MusicButton(props) {

  return (
    <button onKeyPress={props.tecla.handleKeyPress} id={props.tecla.id} className="drum-pad" onClick={() => { props.handleClick(props.tecla.keyTrigger) }} >
      {props.tecla.keyTrigger}
      <audio id={props.tecla.keyTrigger} className="clip" src={props.tecla.url}> </audio>
    </button>
  )
}

export default MusicButton;