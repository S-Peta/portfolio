import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <h1 className="title">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-row">
          <a href="mailto:s.petadev@gmail.com" className="contact-item contact-button">
            <FaEnvelope />
            <span>s.petadev@gmail.com</span>
          </a>
        </div>
        <div className="contact-row">
          <div className="contact-item">
            <FaPhone />
            <span>07554 708 954</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>London, UK</span>
          </div>
        </div>
      </div>
    </>
  );
}
