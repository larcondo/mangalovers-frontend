import styles from "./index.module.css";
import coverNotFound from "@assets/cover-not-found.jpg";
import { useState } from "react";

interface CoverImageProps {
  url?: string;
}

const IMG_SERVER_URL = import.meta.env.VITE_IMG_SERVER_URL;

const CoverImage = ({ url }: CoverImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const coverUrl = !url ? coverNotFound : `${IMG_SERVER_URL}${url}`;

  const coverImageClass = `${styles.coverImage} ${loaded ? styles.loaded : styles.loading}`;

  return (
    <img
      src={coverUrl}
      alt="Cover"
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={coverImageClass}
    />
  );
};

export default CoverImage;
