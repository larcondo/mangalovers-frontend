import useAllVolumes from "@hooks/graphql/useAllVolumes";
import PageContainer from "@components/PageContainer";
import VolumeList from "@components/VolumeList";

const VolumePage = () => {
  const { data, loading, error } = useAllVolumes();

  if (error) return <p>Hubo un error</p>;

  if (loading) return <p>Cargando...</p>;

  return (
    <PageContainer>
      <h1 className="page-title">Volume Page</h1>
      {data && (
        <h3 style={{ textAlign: "center" }}>{data.volumeQty} volumes</h3>
      )}
      {data && <VolumeList volumes={data.allVolumes} />}
    </PageContainer>
  );
};

export default VolumePage;
