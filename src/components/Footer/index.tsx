import styles from "./index.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Mangalovers {year}</p>
    </footer>
  );
};

export default Footer;
