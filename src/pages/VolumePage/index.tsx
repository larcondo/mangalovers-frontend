import useAllVolumes from "@hooks/graphql/useAllVolumes";
import PageContainer from "@components/PageContainer";
import VolumeList from "@components/VolumeList";

const VolumePage = () => {
  const { data, loading, error } = useAllVolumes();

  if (error) return <p>Hubo un error</p>;

  return (
    <PageContainer>
      <h1 className="page-title">Volume Page</h1>

      <h3 className="text-center-aligned">
        {loading ? "Cargando volumenes..." : `${data?.volumeQty} volumes`}
      </h3>

      <VolumeList volumes={data?.allVolumes} loading={loading} />
    </PageContainer>
  );
};

export default VolumePage;
