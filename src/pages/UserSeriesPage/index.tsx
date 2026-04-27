import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@apollo/client/react";
import { USER_SERIES } from "@graphql/queries";
import type { UserSeriesResponse } from "@graphql/types";

import PageContainer from "@components/PageContainer";
import MangaList from "@components/MangaList";

const UserSeriesPage = () => {
  const { user } = useAuth();
  const { data, loading, error } = useQuery<UserSeriesResponse>(USER_SERIES, {
    skip: !user,
  });

  if (error) return <p>Lo sentimos, hubo un error.</p>;

  return (
    <PageContainer>
      <h1 className="page-title">Mis Series</h1>

      {loading && <h3 style={{ textAlign: "center" }}>Cargando series...</h3>}

      <MangaList
        series={data ? data.userSeries.map((s) => s.series) : []}
        loading={loading}
      />
    </PageContainer>
  );
};

export default UserSeriesPage;
