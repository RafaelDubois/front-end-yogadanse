import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import "../style.css"

function SlideShow () {

    return (
        <>
        <div class="container-slide">
        <div class="wrapper-slide">
            <img src={img1} alt="img" />
            <img src={img2} alt="img"/>
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
            <img src={img5} alt="img" />
            <img src={img6} alt="img" />
        </div>
    </div>
      </>
    )
}

export default SlideShow;