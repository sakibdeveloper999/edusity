import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "f6aa4535-abbe-4360-98a4-641edc5c3a26");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset();
      } else {
        setResult("Error: Unable to send message. Please try again later.");
      }
    } catch (err) {
      setResult("Error: Network or server problem.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail icon" /> contact@sakibdeveloper.com
          </li>
          <li>
            <img src={phone_icon} alt="phone icon" /> 01834322352
          </li>
          <li>
            <img src={location_icon} alt="location icon" /> Dhaka, Tajgaon,
            Bangladesh
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />

          <button type="submit" className="dark-btn" disabled={sending}>
            {sending ? "Sending..." : "Submit now"}{" "}
            <img src={white_arrow} alt="arrow" />
          </button>
        </form>

        <div
          role="status"
          aria-live="polite"
          style={{ marginTop: "12px", minHeight: "1.2em" }}
        >
          {result && <span>{result}</span>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
