import type { Volume } from "@/types";
import styles from "./index.module.css";

interface VolumeCardProps {
  volume?: Volume;
}

const VolumeCard = ({ volume }: VolumeCardProps) => {
  if (!volume) return null;

  return (
    <div className={styles.volumeCard}>
      <p>
        <b>{volume.series.name}</b>
      </p>
      <p>{volume.number}</p>
      {volume.title && <p>{volume.title}</p>}
    </div>
  );
};

export default VolumeCard;
