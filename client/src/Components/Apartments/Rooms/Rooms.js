import React from 'react';

import './Rooms.css';

const Estate_Rooms = (props) => {
  return (
    <div className="Estate_List">
      <div className='Estate_Rooms'>
        <ul>
          <li onClick={props.studio}>Studio</li>
          <li onClick={props.oneRoom}>One Room</li>
          <li onClick={props.twoRooms}>Two Rooms</li>
        </ul>
      </div>
    </div >
  )
}

export default Estate_Rooms;