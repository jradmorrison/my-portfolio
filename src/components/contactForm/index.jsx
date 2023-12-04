const Contact = () => {
  return (
    <div id="contact" style={{ backgroundColor: 'whitesmoke' }}>
      <div className="container py-5">
        <div>
          <h3 className="text-center mb-5">GET IN TOUCH</h3>
          <form className="col-lg-6 col-md-8 mx-auto">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                placeholder="A brief message"
                rows={4}
                required
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success">
                CONTACT ME
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
