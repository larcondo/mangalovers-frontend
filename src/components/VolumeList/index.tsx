import styles from "./index.module.css";
import type { Volume } from "@/types";
import VolumeCard from "@components/VolumeCard";
import ShimmerCard from "@components/ShimmerCard";

interface VolumeListProps {
  volumes?: Volume[] | undefined;
  loading?: boolean;
}

const VolumeList = ({ volumes, loading }: VolumeListProps) => {
  const placeholders = Array.from({ length: 20 }, (_, i) => i);

  if (loading)
    return (
      <div className={styles.volumeList}>
        {placeholders.map((p) => (
          <ShimmerCard key={p} />
        ))}
      </div>
    );

  if (!volumes || volumes.length < 1) return null;

  return (
    <div className={styles.volumeList}>
      {volumes.map((v) => (
        <VolumeCard key={v.id} volume={v} />
      ))}
    </div>
  );
};

export default VolumeList;
