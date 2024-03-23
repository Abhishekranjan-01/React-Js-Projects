import { useLocation, useNavigate } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section>
      <h1>This Is About Page</h1>
      <h2>{location.state.alt}</h2>
      <button type="button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </section>
  );
}
