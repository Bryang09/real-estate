import React from 'react';

import './Apartment.css';


const Apartment = (props) => {
  return (
    <div className="Estate_Apartment">
      <div className="Estate_box_">
        <img src={props.apartment.src} alt="apartment complex" />
        <h1>{props.apartment.name}</h1>
        <hr />
        <h3><b>Address: </b>{props.apartment.address}</h3>
        <h3>{props.apartment.city}, {props.apartment.state}</h3>
        <h3><b>Zip Code: </b>{props.apartment.zip_code}</h3>
        {props.apartment.rooms !== "Studio" ?
          <h3><b>{props.apartment.rooms} Room(s): </b>${props.apartment.rent}/month</h3>
          : <h3><b>{props.apartment.rooms}:</b> ${props.apartment.rent}/month</h3>}

        {/* {console.log(props.apartment.)} */}
      </div>
    </div>
  )
}

export default Apartment;