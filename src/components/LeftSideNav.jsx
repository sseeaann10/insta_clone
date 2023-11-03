import { Link } from "react-router-dom";

const LeftSideNav = () => {
    return (
      <nav>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/register"}>Register</Link>{" "}
      </nav>
    );
  };
  
  export default LeftSideNav;