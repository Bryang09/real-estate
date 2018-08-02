import React from 'react';

import './House.css';

const House = (props) => {
  return (
    <div className="Estate_House">
      <div className="Estate_box">
        <img src={props.src} alt="house" />
        <h2>{props.address}</h2>
        <hr />
        <h3><b>Address: </b>{props.address}</h3>
        <h3>{props.city}, {props.state}</h3>
        <h3><b>Zip Code:</b> {props.zip}</h3>
      </div>
    </div>
  )
}

export default House;