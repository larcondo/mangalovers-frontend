import styles from "./index.module.css";
import type { Series } from "@/types";

import CoverImage from "@components/CoverImage";

interface MangaCardProps {
  series?: Series;
}

const MangaCard = ({ series }: MangaCardProps) => {
  if (!series) return null;

  return (
    <div className={styles.mangaCard}>
      <CoverImage url={series.urlCover} />
      <p className={styles.mangaName}>
        <b>{series.name.toUpperCase()}</b>
      </p>
    </div>
  );
};

export default MangaCard;
