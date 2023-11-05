import { Link } from "react-router-dom";
import './LeftSideNav.css';
import logo from '../assets/logonav.png'

const LeftSideNav = () => {
    return (
      <div className="left-navbar">
        <img
        className="sidenav__logo"
        src={ logo }
        alt="Instagram Logo"
      />
        <nav>
          <ul>
          <li><Link to={"/"}>Home</Link>{" "}</li>
          <li><Link to={"/register"}>Register</Link>{" "}</li>
          <li><Link to={"/like_test"}>Like Tester</Link>{" "}</li>
          <li><Link to={"/post"}>Post</Link>{" "}</li>
          <li><Link to={"/api"}>APIPost</Link>{" "}</li>
        </ul>
        </nav>
      </div>
    );
  };
  
  export default LeftSideNav;