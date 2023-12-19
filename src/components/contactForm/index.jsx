import { useState } from 'react';
// import mail from '../../utils/nodemailer';
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formState.name !== '' &&
      formState.email !== '' &&
      formState.message !== ''
    ) {
      // try {
      //   mail(formState);
      // } catch (error) {
      //   console.error(error);
      // }
      // // TODO: Set up nodemailer to have the form input be emailled to me
      clearForm();
    }
  };

  const clearForm = () => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  };

  return (
    <div id="contact" style={{ backgroundColor: 'whitesmoke' }}>
      <div className="container py-5">
        <div>
          <h2 className="text-center mb-5">GET IN TOUCH</h2>
          <form className="col-lg-6 col-md-8 mx-auto">
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
