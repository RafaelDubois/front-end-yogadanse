import yogadanse1 from "../assets/yogadanse1.jpeg"
import yogadanse2 from "../assets/yogadanse2.jpeg"
import yogadanse3 from "../assets/yogadanse3.jpeg"
import yogadanse4 from "../assets/yogadanse4.jpeg"
import "../style.css"
import "./styleslide.css";

function SlideShowSara() {
  return (
    <>
      <div class="slide-sara">
        <div class="wrapper-sara">
          <img src={yogadanse1} alt="img" />
          <img src={yogadanse2} alt="img" />
          <img src={yogadanse3} alt="img" />
          <img src={yogadanse4} alt="img" />
        </div>
      </div>
    </>
  );
}

export default SlideShowSara;
