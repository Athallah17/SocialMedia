import React from "react";
import "./register.css";
import { Twitter} from "@material-ui/icons";

export default function Register() {
  return (
    <div className="register-page">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">REGISTER</div>
          <div className="bar">
            <div className="text-wrapper-2">Email Address</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Username</div>
          </div>
          <div className="bar-2">
            <div className="text-wrapper-2">Full Name</div>
          </div>
          <div className="bar-3">
            <div className="text-wrapper-2">Last Name</div>
          </div>
          <div className="bar-4">
            <div className="text-wrapper-2">Date Of Birth</div>
          </div>
          <div className="bar-5">
            <div className="text-wrapper-2">Password</div>
          </div>
          <div className="bar-6">
            <div className="text-wrapper-3">REGISTER</div>
          </div>

          <div className="logo">
            <div div className="overlap-group">
            <img src="/assets/bg1.png" alt="" className="overlap-group"/>
            <Twitter className="twitter-outlined" />
            </div>
        </div>
          <div className="text-wrapper-4">connecting people from distance</div>
          <div className="burung-biru">
            Burung
            <br />
            Biru.
          </div>
        </div>
      </div>
    </div>
  );
};
