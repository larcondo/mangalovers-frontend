import styles from "./UserDropdown.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { UserInfo } from "@/types";
import useOutsideClick from "@hooks/useOutsideClick";

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

  if (!user) return null;

  return (
    <div className={styles.userSection} ref={menuRef}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={styles.userButton}
      >
        {user.username.charAt(0).toUpperCase()}
      </button>
      {isVisible && (
        <div className={styles.dialog}>
          <p>📕 Mis Series</p>
          <p>📚 Mis Volumenes</p>
          <hr />
          <p>👤 {user.username}</p>
          <p>📩 {user.email}</p>
          <p>🔐 {user.isAdmin ? "Admin" : "Basic"}</p>
          <button
            type="button"
            onClick={onLogout}
            className={styles.logoutButton}
          >
            Log out 🚪
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
