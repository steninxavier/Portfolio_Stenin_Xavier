import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [done, setDone] = useState(false);
  const formref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ovsvorj",
        "template_9aswvrf",
        formref.current,
        "user_GhA7lpp4yJixCXYWbCHl9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-sidebar"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">CONTACT ME</h1>
          <div className="success">{done && "Your message has been sent"}</div>
          <form ref={formref} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="6" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-details">
            <div className="contact-email">
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                alt="email"
                className="email-img"
              />
              <h2>steninxavier@gmail.com</h2>
            </div>
            <div className="contact-phone">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2-mOy_olkX3fwuLaSHl5G4DngC7kMq90jA&usqp=CAU"
                alt="phone"
                className="phone-img"
              />
              <h2>+4915906477551</h2>
            </div>
            <div className="contact-location">
              <img
                src="https://thumbs.dreamstime.com/b/location-pin-icon-white-background-location-pin-sign-location-pin-icon-white-background-location-pin-sign-flat-style-red-103462829.jpg"
                alt="email"
                className="location-img"
              />
              <h2>Berlin, Germany</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
