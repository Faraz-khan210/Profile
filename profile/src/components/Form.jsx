import React from "react";
import profile from "../assets/profile.jpg";

function Form() {
  return (
    <>
      <div className="container">
        <div className="shadow-sm profile-text mt-2 mb-4 py-2" >My Account/Edit Profile</div>
        <form action="" className="shadow-lg p-5 mt-4 mb-5">
          <div className="d-flex img-btn my-4">
            <div className="">
              <img
                src={profile}
                alt=""
                className="rounded-circle"
                height={100}
                width={100}
              />
            </div>
            <div className="buttons mt-4 ms-4">
              <button className="btn btn-primary btn-sm  ms-3 px-3" style={{fontSize:"12px",background:"#1d54ad"}}>
                Upload Picture
              </button>
              {/* <input type="file" name="" id="" className="bg-success" /> */}
              <button className="btn btn-outline-danger btn-sm ms-3 px-4" style={{fontSize:"12px"}}>
                Remove
              </button>
            </div>
          </div>
          {/* image section ended */}

          <div className="form-container">
            <div className="row my-2">
              <div className="col-md-6">
                <label htmlFor="exampleInputEmail1"  className="form-label">
                  <span className="label-title">User Name</span>
                  <span className="require"> (Required to access some sections)</span>
                </label>
                <input
                  type="text"
                   className="form-control"
                  id="username"
                  aria-describedby="userHelp"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="exampleInputEmail1"  className="form-label">
                   <span className="label-title">Contact Name</span> <span className="require">(Required)</span>
                </label>
                <input
                  type="text"
                   className="form-control"
                  id="contactname"
                  aria-describedby="contactnameHelp"
                  placeholder="Enter your contact name"
                />
                <div  className="mb-3 form-check ">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label  className="form-check-label require" htmlFor="exampleCheck1">
                    Some Contact name in public profile
                  </label>
                </div>
              </div>
            </div>
            {/* row1 Ended */}
            <div className="row my-2">
              <div className="col-md-6">
                <label htmlFor="exampleInputEmail1"  className="form-label">
                  <span className="label-title">Moblie Number</span>
                </label>
                <input
                  type="number"
                   className="form-control"
                  id="phonenumber"
                  aria-describedby="phoneHelp"
                  placeholder="Enter your moblie number"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="exampleInputEmail1"  className="form-label">
                  <span className="label-title">Post Code</span>
                </label>
                <input
                  type="text"
                   className="form-control"
                  id="postcode"
                  aria-describedby="codeHelp"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            {/* row2 Ended */}
            <div className="row my-2">
              <div className="col-md-12">
              <label htmlFor="exampleInputEmail1"  className="form-label">
                  <span  className="label-title">About Me</span>
                </label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="postcode"
                  aria-describedby="codeHelp"
                  rows= "5"
                  placeholder="Write about you"
                  style={{resize:"none"}}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <div className="btn btn-success btn-sm text-white ">Upload Profile</div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
