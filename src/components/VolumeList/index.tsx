import styles from "./index.module.css";
import type { Volume } from "@/types";
import VolumeCard from "@components/VolumeCard";

interface VolumeListProps {
  volumes?: Volume[];
  loading?: boolean;
}

const VolumeList = ({ volumes, loading }: VolumeListProps) => {
  if (!volumes || volumes.length < 1) return null;

  if (loading) return <p>Cargando volumenes...</p>;

  return (
    <div className={styles.volumeList}>
      {volumes.map((v) => (
        <VolumeCard key={v.id} volume={v} />
      ))}
    </div>
  );
};

export default VolumeList;
