import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaMapMarkerAlt,FaEnvelope,FaPhone, } from "react-icons/fa";
import './contact.css';

function InputField({ label, name }) {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        name={name}
        required
        placeholder=" " // Required for floating label to work
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Failed to send message. Try again.");
      }
    })
    .catch(() => alert("Error sending message."));
  };

  return (
    <>
      <div className="contact-header">
        <h1>CONTACT ME</h1>
      </div>

      <div className="containers">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <div className="info">
              <div className="information">
                <FaMapMarkerAlt className="info-icon" />
                 <p>Asansol, West Bengal</p>
              </div>
              <div className="information">
                <FaEnvelope className="info-icon" />
                <p> ratnakumari20032006@gmail.com</p>
              </div>
              <div className="information">
                <FaPhone className="info-icon" />
                <p> 8509878572</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with me:</p>
              <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/ratna-kumari-328a09259"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form
              action="https://formspree.io/f/mqabnbkn"
              method="POST"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <h3 className="title">Contact Us</h3>

              
              <InputField label="Email" name="email" />
              

              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  placeholder=" "
                  required
                ></textarea>
                <label>Message</label>
              </div>

              <input type="submit" value="Send" className="btn" />
              {submitted && <p className="success-message">✅ Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
