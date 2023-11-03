import React, { useState } from 'react';

const Register = () => {
  // Example state setup for form fields
  const [form, setForm] = useState({
    name: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data, e.g., send to an API or state management store
    console.log(form);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img 
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                className="w-100"
                style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                alt="Sample"
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                <form className="px-md-2" onSubmit={handleSubmit}>

                  <div className="form-outline mb-4">
                    <input 
                      type="text"
                      id="form3Example1q"
                      className="form-control"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                    />
                    <label className="form-label" htmlFor="form3Example1q">Name</label>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input 
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="exampleDatepicker1" className="form-label">Select a date</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select 
                        className="select"
                        name="gender"
                        value={form.gender}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <select 
                      className="select"
                      name="class"
                      value={form.class}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>Class</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                    </select>
                  </div>

                  <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                    <div className="col-md-6">
                      <div className="form-outline">
                        <input 
                          type="text"
                          id="form3Example1w"
                          className="form-control"
                          name="registrationCode"
                          value={form.registrationCode}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="form3Example1w">Registration code</label>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
