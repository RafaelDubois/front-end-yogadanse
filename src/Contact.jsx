import Navbar from "./components/Navbar";
import ContactForm from "./components/Form";
import Footer from "./components/Footer";

function Contact () {
    return (
    <div class="up-bg">
    <div class="bg">
        {" "}
        <p>.</p>
    <Navbar />
    <div class="cform" style="margin-top:150px">
    <ContactForm />
    </div>
    
    </div>
    <Footer />
    </div>
    )
}

export default Contact;