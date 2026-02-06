import styles from "./index.module.css";
import type { Series } from "@/types";

interface MangaCardProps {
  series?: Series;
}

const MangaCard = ({ series }: MangaCardProps) => {
  if (!series) return null;

  return (
    <div className={styles.mangaCard}>
      <p>
        <b>{series.name.toUpperCase()}</b>
      </p>
      <p>{series.publisher.name}</p>
      <p>{series.printFormat.name}</p>
    </div>
  );
};

export default MangaCard;
