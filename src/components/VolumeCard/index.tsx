import type { Volume } from "@/types";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

import CoverImage from "@components/CoverImage";

interface VolumeCardProps {
  volume?: Volume;
}

const VolumeCard = ({ volume }: VolumeCardProps) => {
  if (!volume) return null;

  return (
    <div className={styles.volumeCard}>
      <Link to={`/volume/${volume.id}`} title={volume.series.name}>
        <CoverImage url={volume.urlCover} />
        <p className={styles.volumeSeriesName}>
          <b>{volume.series.name.toUpperCase()}</b>
        </p>
        <p className={styles.volumeNumber}># {volume.number}</p>
      </Link>
    </div>
  );
};

export default VolumeCard;
