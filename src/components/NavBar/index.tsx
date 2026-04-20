import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";

import NavigationLink from "./NavigationLink";
import UserDropdown from "./UserDropdown";

const NavBar = () => {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav className={styles.navBar}>
      <h3 className={styles.logo}>Mangalovers</h3>
      <NavigationLink path="/" text="Home" currentPath={pathname} />
      <NavigationLink path="/series" text="Series" currentPath={pathname} />
      <NavigationLink path="/volumes" text="Volumes" currentPath={pathname} />
      {!user && (
        <NavigationLink path="/login" text="Login" currentPath={pathname} />
      )}

      <UserDropdown user={user} logout={logout} />
    </nav>
  );
};

export default NavBar;
