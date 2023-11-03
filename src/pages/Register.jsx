import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';

const Register = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]); 
 };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && avatar) {
      const newUser = {
        id: Date.now(),
        name,
        avatar  
      };
      dispatch(registerUser(newUser));
      setName("");
      setAvatar(null);
    }
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                className="w-100"
                style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem" }}
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
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example1q">Name</label>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="avatar">Avatar:</label>
                    <input
                      type="file"
                      id="avatar"
                      className="form-control"
                      onChange={handleAvatarChange}
                      required
                    />
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
