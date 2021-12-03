import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

const LandingPage = ({ onRouteChange }) => {
  /*componentDidMount() {
        startingPage();
    }*/

  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          href="https://static3.bigstockphoto.com/4/4/2/large1500/244446952.jpg"
          alt="Card image cap"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <Link to="/signin"> */}
          <button className="btn btn-primary">Try it</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
