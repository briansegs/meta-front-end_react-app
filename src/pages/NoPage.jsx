import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default NoPage;
