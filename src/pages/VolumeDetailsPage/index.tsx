import styles from "./index.module.css";
import { useLoaderData } from "react-router-dom";
import useVolumeDetails from "@hooks/graphql/useVolumeDetails";

import PageContainer from "@components/PageContainer";
import CoverImage from "@/components/CoverImage";

interface Params {
  id: string;
}

const VolumeDetailsPage = () => {
  const { id } = useLoaderData<Params>();
  const { data, loading, error } = useVolumeDetails({ id });

  if (error) return <p>Hubo un error</p>;

  if (loading) return <p>Cargando...</p>;

  if (!data) return <p>Volumen no encontrado.</p>;

  const volume = data.volumeById;

  return (
    <PageContainer>
      <h1 className="page-title">Detalles del Volumen</h1>
      <div className={styles.volumeLayout}>
        <div className={styles.coverSection}>
          <CoverImage url={volume.urlCover} />
        </div>
        <div className={styles.infoSection}>
          <h2>
            #{volume.number} {volume.series.name}
          </h2>
          {volume.title && <h3>{volume.title}</h3>}
          {volume.synopsis && <p>{volume.synopsis}</p>}
          {volume.publicationDate && (
            <p>Publicado el: {volume.publicationDate.split("T")[0]}</p>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default VolumeDetailsPage;
