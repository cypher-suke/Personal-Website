import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',        // Replace with your EmailJS service ID
      'your_template_id',       // Replace with your template ID
      form.current,
      'your_public_key'         // Replace with your public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Something went wrong: ' + error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
