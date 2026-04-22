import styles from "./index.module.css";
import type { Series } from "@/types";
import MangaCard from "@components/MangaCard";

interface MangaListProps {
  series?: Series[];
  loading?: boolean;
}

const MangaList = ({ series, loading }: MangaListProps) => {
  if (!series || series.length < 1) return null;

  if (loading) return <p>Cargando series...</p>;

  return (
    <div className={styles.mangaList}>
      {series.map((s) => (
        <MangaCard key={s.id} series={s} />
      ))}
    </div>
  );
};

export default MangaList;
