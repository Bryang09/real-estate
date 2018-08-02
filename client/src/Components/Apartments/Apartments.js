import React, { Component } from 'react';
import axios from 'axios';

import './Apartments.css';

import NavBar from '../NavBar/NavBar';
import Apartment from './Apartment/Apartment';
import Rooms from './Rooms/Rooms';

class Estate_Apartments extends Component {
  state = {
    listings: []
  }

  componentDidMount() {
    axios.get('/api/apartments/one-room')
      .then(res => this.setState({ listings: res.data }))
  }

  oneRoomHandler = () => {
    axios.get("/api/apartments/one-room")
      .then(one => this.setState({ listings: one.data }))
  }

  twoRoomHandler = () => {
    axios.get('/api/apartments/two-room')
      .then(two => this.setState({ listings: two.data }))
  }

  studioHandler = () => {
    axios.get('/api/apartments/studio')
      .then(studio => this.setState({ listings: studio.data }))
  }
  render() {

    const Apartment_ = this.state.listings.map(listing => (
      <div className="Estate_Wrap" key={listing._id}>
        <Apartment
          apartment={listing}
        />

      </div>
    ));
    return (
      <div className="Estate_Container NoOverflow">
        <NavBar />
        <div className="Estate_Houses" id="Apartment">
          <h1>Apartments</h1>
          <hr />
          <Rooms
            twoRooms={this.twoRoomHandler}
            studio={this.studioHandler}
            oneRoom={this.oneRoomHandler}
          />

          <div className="Estate_HouseList">
            {Apartment_}
          </div>
        </div>
      </div>
    )
  }
}

export default Estate_Apartments;