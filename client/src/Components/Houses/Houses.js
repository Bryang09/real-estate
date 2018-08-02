import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import './Houses.css';
import House from './House/House';
import State from '../State/State';


class Houses extends Component {
  state = {
    listing: []
  }
  componentDidMount() {
    axios.get('/api/houses/texas')
      .then(res => this.setState({ listing: res.data }))
  }

  txHandler = () => {
    axios.get('/api/houses/texas')
      .then(res => this.setState({ listing: res.data }))
      .catch(err => console.log(err))
  }

  californiaHandler = () => {
    axios.get('/api/houses/california')
      .then(res => this.setState({ listing: res.data }))
      .catch(err => console.log(err))
  }

  nyHandler = () => {
    axios.get('/api/houses/ny')
      .then(res => this.setState({ listing: res.data }))
      .catch(err => console.log(err))
  }
  render() {

    const Listing = this.state.listing.map(listing => (
      <div key={listing._id} className="Estate_Wrap">
        <House
          city={listing.city}
          address={listing.address}
          state={listing.state}
          zip={listing.zip_code}
          src={listing.src}
        />
      </div>
    ))
    return (
      <div className="Estate_Container NoOverflow">
        <NavBar />
        <div className="Estate_Houses">
          <h1>Houses</h1>
          <hr />
          <State
            california={this.californiaHandler}
            ny={this.nyHandler}
            tx={this.txHandler}
          />
          <div className="Estate_HouseList">
            {Listing}
          </div>
        </div>
      </div>
    )
  }
}

export default Houses;