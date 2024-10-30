import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>404 Page Not Found</h2>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}

export default NotFound;
