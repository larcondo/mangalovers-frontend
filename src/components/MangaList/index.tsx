import styles from "./index.module.css";
import type { Series } from "@/types";
import MangaCard from "@components/MangaCard";
import ShimmerCard from "@components/ShimmerCard";

interface MangaListProps {
  series?: Series[] | undefined;
  loading?: boolean;
}

const MangaList = ({ series, loading }: MangaListProps) => {
  const placeholders = Array.from({ length: 20 }, (_, i) => i);

  if (loading)
    return (
      <div className={styles.mangaList}>
        {placeholders.map((p) => (
          <ShimmerCard key={p} />
        ))}
      </div>
    );

  if (!series || series.length < 1) return null;

  return (
    <div className={styles.mangaList}>
      {series.map((s) => (
        <MangaCard key={s.id} series={s} />
      ))}
    </div>
  );
};

export default MangaList;
