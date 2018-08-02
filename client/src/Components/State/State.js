import React from 'react';

import './State.css'
const State = (props) => {
  return (
    <div className="Estate_State">
      <ul>
        <li onClick={props.california}>California</li>
        <li onClick={props.ny}>New York</li>
        <li onClick={props.tx}>Texas</li>
      </ul>
    </div>
  )
}

export default State;