import style from "./index.module.css";
import { useLocation } from "react-router-dom";

import NavigationLink from "./NavigationLink";
import { useAuth } from "@/hooks/useAuth";

const NavBar = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav className={style.navBar}>
      <h3 className={style.logo}>Mangalovers</h3>
      <NavigationLink path="/" text="Home" currentPath={pathname} />
      <NavigationLink path="/series" text="Series" currentPath={pathname} />
      <NavigationLink path="/volumes" text="Volumes" currentPath={pathname} />
      {!user && (
        <NavigationLink path="/login" text="Login" currentPath={pathname} />
      )}
    </nav>
  );
};

export default NavBar;
