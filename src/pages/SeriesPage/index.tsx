import useAllSeries from "@hooks/graphql/useAllSeries";
import PageContainer from "@components/PageContainer";
import MangaList from "@components/MangaList";

const SeriesPage = () => {
  const { data, loading, error } = useAllSeries();

  if (error) return <p>Hubo un error</p>;

  if (loading) return <p>Cargando...</p>;

  return (
    <PageContainer>
      <h1 className="page-title">Series Page</h1>
      {data && <h3 style={{ textAlign: "center" }}>{data.seriesQty} series</h3>}

      {data && <MangaList series={data.allSeries} />}
    </PageContainer>
  );
};

export default SeriesPage;
