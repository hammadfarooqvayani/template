import React from "react";
import woods from "../../../../src/Image/woods.jpg";
import bridge from "../../../../src/Image/bridge.jpg";

function Leftpanal() {
  return (
    <div className="coloum">
      <div className="left">
        <div className="box">
          <img src={woods} alt="Woods" className="image" />
          <div className="card1">
            <h3>
              <b>TITLE HEADING</b>
            </h3>
            <h5>
              Title description,
              <span className="pan">April 7, 2014</span>
            </h5>
            <p>
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
              mi non congue ullam corper. Praesent tincidunt sed tellus ut
              rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
              congue gravida diam non fringilla.
            </p>
            <div className="gap">
              <button className="cardbtn">
                <b>READ MORE »</b>
              </button>
              <div className="comentcom">
                <b className="com">Comments </b>
                <span className="zero"> 0 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="left">
          <div className="box">
            <img src={bridge} alt="bridge" className="image" />
            <div className="card1">
              <h3>
                <b>BLOG ENTRY</b>
              </h3>
              <h5>
                Title description,
                <span className="pan">April 7, 2014</span>
              </h5>
              <p>
                Mauris neque quam, fermentum ut nisl vitae, convallis maximus
                nisl. Sed mattis nunc id lorem euismod placerat. Vivamus
                porttitor magna enim, ac accumsan tortor cursus at. Phasellus
                sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                tellus ut rutrum. Sed vitae justo condimentum, porta lectus
                vitae, ultricies congue gravida diam non fringilla.
              </p>
              <div className="gap">
                <button className="cardbtn">
                  <b>READ MORE »</b>
                </button>
                <div className="comentcom">
                  <b className="com">Comments </b>
                  <span className="two"> 2 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftpanal;
