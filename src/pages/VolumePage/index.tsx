import useAllVolumes from "@hooks/graphql/useAllVolumes";
import PageContainer from "@components/PageContainer";
import type { Volume } from "@/types";

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
      {data && (
        <div
          style={{ display: "flex", margin: "0 auto", width: "fit-content" }}
        >
          {data.allVolumes.map((v) => (
            <VolumeCard key={v.id} volume={v} />
          ))}
        </div>
      )}
    </PageContainer>
  );
};

interface VolumeCardProps {
  volume?: Volume;
}

const VolumeCard = ({ volume }: VolumeCardProps) => {
  if (!volume) return null;

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
        <b>{volume.series.name}</b>
      </p>
      <p>{volume.number}</p>
      {volume.title && <p>{volume.title}</p>}
    </div>
  );
};

export default VolumePage;
