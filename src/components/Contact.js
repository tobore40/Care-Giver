import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-section">
      <div
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <div>
          <i className="fas fa-map-marker-alt" />
          GT 41 Unit 3, Lekki Garden Estate Phase 1, Ajah, Lagos
        </div>
        <div>
          <i className="fas fa-envelope" />
           dreamware40@gmail.com
        </div>
        <div>
          <i className="fas fa-phone" />
          +2348038467289
        </div>
        <div>
          <i className="fas fa-clock" />
          Mon - Fri 8:00 AM to 5:00 PM
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form
          className="contact"
          action="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <input
            type="text"
            name="name"
            className="text-box"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="text-box"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
          />
          <input
            type="submit"
            name="submit"
            className="send-btn"
            value="Send"
            initial={{ x: "-80vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: "120" }}
            whileHover={{
              scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default Contact