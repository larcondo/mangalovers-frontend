import styles from "./index.module.css";
import type { Series } from "@/types";
import { Link } from "react-router-dom";

import CoverImage from "@components/CoverImage";

interface MangaCardProps {
  series?: Series;
}

const MangaCard = ({ series }: MangaCardProps) => {
  if (!series) return null;

  return (
    <div className={styles.mangaCard}>
      <Link to={`/series/${series.id}`} title={series.name}>
        <CoverImage url={series.urlCover} />
        <p className={styles.mangaName}>
          <b>{series.name.toUpperCase()}</b>
        </p>
      </Link>
    </div>
  );
};

export default MangaCard;
