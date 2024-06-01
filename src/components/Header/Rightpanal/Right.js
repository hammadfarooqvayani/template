import avatar_g from "../../../../src/Image/avatar_g.jpg";
import wordshop from "../../../../src/Image/workshop.jpg";
import gondol from "../../../../src/Image/gondol.jpg";
import skies from "../../../../src/Image/skies.jpg";
import rock from "../../../../src/Image/rock.jpg";

function Rightpanal() {
  return (
    <div className="rightsection">
      <div className="namecard">
        <img className="img" src={avatar_g} alt="Woods" />
        <div className="card1">
          <h3>
            <b> My Name</b>
          </h3>
          <p>
            Just me, myself and I, exploring the universe of uknownment. I have
            a heart of love and a interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="card2">
          <h4 className="p">Popular Posts</h4>
          <ul>
            <li>
              <img className="lis" src={wordshop} alt="wordshop" />
              <span className="pa">Lorem</span>
              <br />
              <span>Sed mattis nunc</span>
            </li>
            <li>
              <img className="lis" src={gondol} alt="gondol" />
              <span className="pa">Ipsum</span>
              <br />
              <span>Praes tinci sed</span>
            </li>
            <li>
              <img className="lis" src={skies} alt="skies" />
              <span className="pa">Dorum</span>
              <br />
              <span>Ultricies congue</span>
            </li>
            <li>
              <img className="lis" src={rock} alt="rock" />
              <span className="pa">Mingsum</span>
              <br />
              <span>Lorem ipsum dipsum</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="last">
        <div>
          <h4 className="p">Tags</h4>
        </div>
        <div className="tag">
          <p>
            <span className="four one">Travel</span>
            <span className="four">Newyork</span>
            <span className="four">London</span>
            <span className="four">IKEA</span>
            <span className="four">NORWAY</span>
            <span className="four">DIY</span>
            <br/>
            <span className="four">Ideas</span>
            <span className="four">Baby</span>
            <span className="four">Family</span>
            <span className="four">News</span>
            <span className="four">Clothing</span>
            <span className="four">Shopping</span>
            <br/>
            <span className="four">Sports</span>
            <span className="four">Games</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rightpanal;
