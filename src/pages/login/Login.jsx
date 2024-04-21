import "./login.css";
import { Twitter} from "@material-ui/icons";

export default function Login() {
  return (
    <div className="login-page">
    <div className="div">
      <div className="overlap">
        <div className="rectangle" />
        <div className="text-wrapper">LOG IN</div>
        <div className="bar">
          <div className="text-wrapper-2">Username or Email</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Password</div>
        </div>
        <div className="bar-2">
          <div className="text-wrapper-3">LOG IN</div>
        </div>
        <div className="bar-3">
          <div className="text-wrapper-4">Create New Account</div>
        </div>
        <div className="text-wrapper-5">Forgot Password?</div>
        <div className="text-wrapper-6">or</div>

        <div className="logo">
          <div className="overlap-group">
          <img src="/assets/bg1.png" alt="" className="overlap-group"/>
          <Twitter className="twitter-outlined" />
          </div>
        </div>
        <div className="text-wrapper-7">connecting people from distance</div>
        <div className="burung-biru">
          Burung
          <br />
          Biru.
        </div>
      </div>
    </div>
  </div>
  );
}
