import React from "react";

function Footer() {
  return (
    <>
      <div className="container p-5">
        <div className="row my-5">
          <div className="col-md-2">
            <div></div>
            <p className="add mt-5">
              Address: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quae dignissimos rem, cupiditate facilis ea alias quasi tenetur
            </p>
            <div>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fa fa-facebook-f " style={{color:"#1d54ad"}}></i>
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
              >
                <i class="fa fa-instagram  ms-3" style={{color:"#1d54ad"}}></i>
              </a>
              <a href="https://twitter.com/i/flow/login" target="_blank">
                <i class="fa fa-twitter  ms-3" style={{color:"#1d54ad"}}></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <i class="fa fa-linkedin  ms-3" style={{color:"#1d54ad"}}></i>
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="head  text-primary">Our Services</div>
            <ul className="list-unstyled foot mt-3">
              <li>Buy</li>
              <li>Rent/Lease</li>
              <li>Sell</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="head text-primary">Quick Links</div>
            <ul className="list-unstyled foot mt-3">
              <li>Blogs</li>
              <li>Feedback</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="head  text-primary">Subscribe US</div>
            <div className="input-group mb-3 mt-3 position-relative">
              <input
                type="email"
                className="form-control  py-2"
                placeholder="Enter Your Email Address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success btn-sm position-absolute end-0 me-3 rounded mt-1 "
                type="button"
                style={{ height: "35px", width: "90px" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
