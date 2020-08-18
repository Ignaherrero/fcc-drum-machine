import React from "react";

function ControlPanel(props) {
  return (
    <div id="panel" className="panel">
      {/* Renderiza el boton switch de power */}
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" onClick={props.switchPower}></span>
      </label>
      {/* Renderiza selector de sonido */}
      <label className="switch">
        <input type="checkbox" />
        <span className="slider sound round" onClick={props.switchSound}></span>
      </label>
      {/* Modifica volumen */}
      <input type="range" name="volume" onChange={props.handleVolumeChange} value={props.volume} min="0" max="1" step="0.05" ></input>
    </div>
  )
}
export default ControlPanel;