import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS Configuration
  const emailjsConfig = {
    serviceId: 'service_1l8unl7',
    templateId: 'template_44aoecb',
    userId: 'TN0RgxOOD0d46M9Jm'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous status
    setSubmitStatus(null);

    // Validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      e.target,
      emailjsConfig.userId
    )
    .then(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">BOLLAPALLI MANIKANTA</h1>
        <h2 className="contact-title">CONTACT</h2>
        
        <p className="contact-description">
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </p>
        
        {submitStatus === 'success' && (
          <div className="alert success">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="alert error">
            Please fill all fields correctly and try again.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input" 
              placeholder="Enter Your Name" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input" 
              placeholder="Enter Your Email" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea" 
              placeholder="Enter Your Message"
              rows="6"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
            aria-label="Submit contact form"
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;