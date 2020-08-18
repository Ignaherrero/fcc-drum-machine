import React from "react";
function Display(props) {
  return (
    <div>
      <span id="display" className="display">{props.display}</span>
    </div>
  )
}
export default Display;