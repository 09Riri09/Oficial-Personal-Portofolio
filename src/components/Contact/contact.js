import "./contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animatedletters";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer , Marker , Popup } from "react-leaflet";

function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kquqgph",
        "template_eow25qk",
        form.current,
        "YDhYodi8SsQPGJY8G"
      )
      .then(
        () => {
          alert("Message succesfully snet!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please contact through linkedIn");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t ", " ", " m", "e"]}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dascalescu Rares,
          <br />
          Romania, Iasi
          <span>rares.dascalescu@gmail.com</span>
        </div>
        <div className="map-wrap">
         <MapContainer center = {[47.1615598,27.5837814]} zoom = {7}>
          <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position = {[47.1615598,27.5837814]}>
          </Marker>
         </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
}
export default Contact;
