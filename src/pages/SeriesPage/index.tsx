import useAllSeries from "@hooks/graphql/useAllSeries";
import PageContainer from "@components/PageContainer";
import type { Series } from "@/types";

const SeriesPage = () => {
  const { data, loading, error } = useAllSeries();

  if (error) return <p>Hubo un error</p>;

  if (loading) return <p>Cargando...</p>;

  return (
    <PageContainer>
      <h1 className="page-title">Series Page</h1>
      {data && <h3 style={{ textAlign: "center" }}>{data.seriesQty} series</h3>}

      {data && (
        <div
          style={{ display: "flex", margin: "0 auto", width: "fit-content" }}
        >
          {data.allSeries.map((s) => {
            return <SeriesCard key={s.id} series={s} />;
          })}
        </div>
      )}
    </PageContainer>
  );
};

interface SeriesCardProps {
  series?: Series;
}

const SeriesCard = ({ series }: SeriesCardProps) => {
  if (!series) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1ch",
        border: "1px solid",
      }}
    >
      <p>
        <b>{series.name}</b>
      </p>
      <p>{series.publisher.name}</p>
      <p>{series.printFormat.name}</p>
    </div>
  );
};

export default SeriesPage;
