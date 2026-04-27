import styles from "./index.module.css";
import { useLoaderData } from "react-router-dom";
import useSeriesDetails from "@hooks/graphql/useSeriesDetails";

import PageContainer from "@components/PageContainer";
import CoverImage from "@components/CoverImage";
import VolumeList from "@/components/VolumeList";

interface Params {
  id: string;
}

const SeriesDetailsPage = () => {
  const { id } = useLoaderData<Params>();
  const { data, loading, error } = useSeriesDetails({ id });

  if (error) return <p>Hubo un error</p>;

  if (loading) return <p>Cargando...</p>;

  if (!data) return <p>Serie no encontrada.</p>;

  const series = data.seriesById;
  const volumes = data.volumesBySeries;

  return (
    <PageContainer>
      <h1 className="page-title">{series.name}</h1>
      <div className={styles.seriesLayout}>
        <div className={styles.coverSection}>
          <CoverImage url={series.urlCover} />
        </div>
        <div className={styles.infoSection}>
          <h2>Editorial: {series.publisher.name}</h2>
          <h3>Formato: {series.printFormat.name}</h3>
          {series.isSingleVolume && <p>Tomo único</p>}
          <p>Guión: {series.author.writer.name}</p>
          <p>Dibujo: {series.author.illustrator.name}</p>
        </div>
      </div>

      <div>
        <VolumeList volumes={volumes} loading={loading} />
      </div>
    </PageContainer>
  );
};

export default SeriesDetailsPage;
