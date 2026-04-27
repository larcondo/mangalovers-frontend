import styles from "./UserDropdown.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { UserInfo } from "@/types";
import useOutsideClick from "@hooks/useOutsideClick";
import {
  FaUser,
  FaBook,
  FaBookBookmark,
  FaEnvelope,
  FaUserShield,
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

interface UserDropdownProps {
  user?: UserInfo | null;
  logout: () => void;
}

const UserDropdown = ({ user, logout }: UserDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const menuRef = useOutsideClick<HTMLDivElement>(() => setIsVisible(false));

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user)
    return (
      <div className={styles.loginContainer}>
        <Link to="/login" className={styles.loginLink}>
          Login <FaArrowRightToBracket className={styles.icon} />
        </Link>
      </div>
    );

  return (
    <div className={styles.userSection} ref={menuRef}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={styles.userButton}
      >
        <FaUser className={styles.icon} size="0.9em" />
      </button>
      {isVisible && (
        <div className={styles.dialog}>
          <Link to="/user/series" onClick={() => setIsVisible(false)}>
            <FaBook className={styles.icon} /> Mis Series
          </Link>
          <p>
            <FaBookBookmark className={styles.icon} /> Mis Volumenes
          </p>
          <hr />
          <p>
            <FaUser className={styles.icon} /> {user.username}
          </p>
          <p>
            <FaEnvelope className={styles.icon} /> {user.email}
          </p>
          <p>
            <FaUserShield className={styles.icon} />{" "}
            {user.isAdmin ? "Admin" : "Basic"}
          </p>
          <button
            type="button"
            onClick={onLogout}
            className={styles.logoutButton}
          >
            <span>Log out</span>{" "}
            <FaArrowRightFromBracket className={styles.logoutIcon} />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
