import React from "react";
import ButtonStyle from "../UI/ButtonStyle";

function MusicButton(props) {

  return (
    <ButtonStyle onKeyPress={props.tecla.handleKeyPress} id={props.tecla.id} className="drum-pad" onClick={() => { props.handleClick(props.tecla.keyTrigger) }} >
      {props.tecla.keyTrigger}
      <audio id={props.tecla.keyTrigger} className="clip" src={props.tecla.url}> </audio>
    </ButtonStyle>
  )
}

export default MusicButton;