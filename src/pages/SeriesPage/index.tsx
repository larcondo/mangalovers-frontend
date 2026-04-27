import useAllSeries from "@hooks/graphql/useAllSeries";
import PageContainer from "@components/PageContainer";
import MangaList from "@components/MangaList";

const SeriesPage = () => {
  const { data, loading, error } = useAllSeries();

  if (error) return <p>Hubo un error</p>;

  return (
    <PageContainer>
      <h1 className="page-title">Series Page</h1>

      <h3 className="text-center-aligned">
        {loading ? "Cargando series..." : `${data?.seriesQty} series`}
      </h3>

      <MangaList series={data?.allSeries} loading={loading} />
    </PageContainer>
  );
};

export default SeriesPage;
