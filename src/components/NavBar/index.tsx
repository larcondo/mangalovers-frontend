import style from "./index.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <h3 className={style.logo}>Mangalovers</h3>
      <Link to={"/"}>Home</Link>
      <Link to={"/series"}>Series</Link>
      <Link to={"/volumes"}>Volumes</Link>
      <Link to={"/login"}>Login</Link>
    </nav>
  );
};

export default NavBar;
