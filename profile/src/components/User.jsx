import React from "react";
import profile from "../assets/profile.jpg";

function User() {
  return (
    <>
      <div className="row bg-white mt-3 py-2 rounded">
        <div className="col-sm-4 col-sm-4">
          <img
            src={profile}
            alt=""
            className="rounded-circle"
            height={75}
            width={75}
          />
        </div>
        <div className="col-sm-8 col-sm-8 text-start mt-3">
          <div className="lh-sm fs-5">Dheeraj</div>
          <div className="text-primary lh-1" style={{ fontSize: "15px" }}>
            dheeraj@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
