import React from "react";
import dogi from "../../images/dogi.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="section-a">
      <div className="container">
        <div className="image-kom">
          <img src={dogi} alt="img" />
        </div>

        <div className="text">
          <h4>Organic TEA</h4>
          <h1 className="mega-font">
            Hello
            <span> Pet Lovers</span>
          </h1>
          <p style={{ fontSize: "30px" }}>
            An online platform to search for animals who need homes. A directory
            of animal shelters and adoption organizations in Canada.
          </p>

          <p className="number">$ 89.99</p>
          <hr width="50%" />
          <a href="#" className="button">
            Explore Now
          </a>
          <div className="column-grid">
            <div className="column-1">
              <h3>Dogs</h3>
              <p>Domestic Animals</p>
            </div>
            <div className="column-2">
              <h3>Cats</h3>
              <p>Tamed Animals</p>
            </div>
            <div className="column-3">
              <h3>Family Friendly</h3>
              <p>kids safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
