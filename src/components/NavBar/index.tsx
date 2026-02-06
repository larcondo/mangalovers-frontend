import style from "./index.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <Link to={"/"}>Home</Link>
      <Link to={"/series"}>Series</Link>
      <Link to={"/volumes"}>Volumes</Link>
      <Link to={"/login"}>Login</Link>
    </nav>
  );
};

export default NavBar;
