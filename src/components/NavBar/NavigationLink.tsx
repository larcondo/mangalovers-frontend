import styles from "./NavigationLink.module.css";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  path: string;
  text: string;
  currentPath: string;
}

const NavigationLink = ({ path, text, currentPath }: NavigationLinkProps) => {
  const linkClass =
    styles.navigationLink + (currentPath === path ? ` ${styles.active}` : "");

  return (
    <Link to={path} className={linkClass}>
      {text}
    </Link>
  );
};

export default NavigationLink;
