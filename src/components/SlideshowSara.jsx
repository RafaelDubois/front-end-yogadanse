import img1 from "../assets/imghome1.png";
import img2 from "../assets/imghome2.png";
import img3 from "../assets/imghome3.png";
import "../style.css"
import "../styleslide.css";

function SlideShowSara() {
  return (
    <>
      <div class="slide-sara">
        <div class="wrapper-sara">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
        </div>
      </div>
    </>
  );
}

export default SlideShowSara;
