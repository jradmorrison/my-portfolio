import { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = () => {
    const { id, value } = event.target;

    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      formState.name !== '' &&
      formState.email !== '' &&
      formState.message !== ''
    ) {
      try {
        const res = await fetch('/api/contact-me', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        });

        await res.json();
        if (!res.ok) {
          throw new Error('Unable to submit request');
        } else {
          sendMessage('Message sent successfully', 'success');
        }
      } catch (error) {
        // console.error(error);
        sendMessage('Error submitting request', 'error');
      } finally {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        setFormState({ name: '', email: '', message: '' });
      }
    } else {
      sendMessage('Please fill out the form');
    }
  };

  const sendMessage = (message, result) => {
    const messageElement = document.createElement('div');
    messageElement.setAttribute('id', 'formMessage');

    if (result === 'success') {
      messageElement.classList.add('success');
      messageElement.innerHTML = message;
    } else if (result === 'error') {
      messageElement.classList.add('error');
      messageElement.innerHTML = message;
    } else {
      messageElement.classList.add('warning');
      messageElement.innerHTML = message;
    }

    document.getElementById('contactForm').appendChild(messageElement);
    setTimeout(removeMessage, 3000);
  };

  const removeMessage = () => document.getElementById('formMessage').remove();

  return (
    <div id="contact" style={{ backgroundColor: 'whitesmoke' }}>
      <div className="container py-5">
        <div>
          <h2 className="text-center mb-5">GET IN TOUCH</h2>
          <form
            id="contactForm"
            className="col-lg-6 col-md-8 mx-auto position-relative">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                placeholder="A brief message"
                rows={4}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-end">
              <button onClick={handleFormSubmit}>CONTACT ME</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
