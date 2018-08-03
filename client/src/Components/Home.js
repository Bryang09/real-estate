import React, { Component } from 'react';
import './Home.css';
import NavBar from './NavBar/NavBar';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Estate_Home NoOverflow">
        <NavBar />
        <h1>Bryan's Listings</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus temporibus eius repudiandae fugit libero, quis et fuga aut minima sequi enim quod soluta iure? Nemo necessitatibus maiores facilis velit quibusdam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus, veritatis explicabo, iste quia blanditiis excepturi fuga ad pariatur nesciunt error omnis vero dolorem voluptatibus et numquam. Omnis, quibusdam deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque, ullam temporibus amet ipsam ratione laboriosam nisi, similique explicabo numquam perferendis consequuntur perspiciatis asperiores labore, ab facere iure soluta libero!</p>
        <div className="Estate_Boxes">
          <div id="Estate_box1">
            <Link to="/houses"> <h3>Houses </h3></Link>
          </div>
          <div id="Estate_box2">
            <Link to="/apartments">
              <h3>Apartments </h3>
            </Link>
          </div>
        </div>
        <div className="Estate_Closing">
          <h2>Stuck trying to find the best deals?</h2>
          <p>Our team of proffesionals are ready to help 24/7. Just contact us at <span id="mail"><a href={"mailto:example@example.com"}>Our Email</a></span> with your contact information (<i>i.e.</i> your name, Email, and phone number )</p>
        </div>
      </div>

    )
  }
}

export default Home;