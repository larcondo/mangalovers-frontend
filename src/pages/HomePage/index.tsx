import { useAuth } from "@/hooks/useAuth";
import PageContainer from "@components/PageContainer";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <PageContainer>
      <h1 className="page-title">Home Page</h1>
      {user && (
        <>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.isAdmin ? "ADMIN" : "BASIC"}</p>
        </>
      )}
    </PageContainer>
  );
};

export default HomePage;
