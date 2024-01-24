
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";  


function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="tel:9405605217">
                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 9405605217
              </a>
              <a href="mailto:vijayIndalkar@gmail.com">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                vijayIndalkar@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Pune,Maharashtra 
              </a>
            </div>
            <div className="contact-div__form">
              <form action="src\Pages\databasephp.php" id="contactForm" method="POST">
                <label>









































































































                  Full Name <b>*</b>
                </label>
                <input type="text" id="name" placeholder='E.g: "Baba Yaga"'></input>

                <label>
                  Email <b>*</b>  
                </label>
                <input type="email" id="emailid" placeholder="babayaga@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea id="msgContent" placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message 
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 9405605217</h3>
              </span>
            </div>
          </div>
        </div>;
        <Footer />
      </section>
    </>
  );
}

export default Contact;
