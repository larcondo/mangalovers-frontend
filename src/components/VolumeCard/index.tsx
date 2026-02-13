import type { Volume } from "@/types";
import styles from "./index.module.css";

import CoverImage from "@components/CoverImage";

interface VolumeCardProps {
  volume?: Volume;
}

const VolumeCard = ({ volume }: VolumeCardProps) => {
  if (!volume) return null;

  return (
    <div className={styles.volumeCard}>
      <CoverImage url={volume.urlCover} />
      <p className={styles.volumeSeriesName}>
        <b>{volume.series.name.toUpperCase()}</b>
      </p>
      <p className={styles.volumeNumber}># {volume.number}</p>
    </div>
  );
};

export default VolumeCard;
