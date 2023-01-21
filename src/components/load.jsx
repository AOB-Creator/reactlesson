import "./load.css";
import PacmanLoader from "react-spinners/PacmanLoader";
function LoadingPage() {
  return (
    <div className="loading">
      <PacmanLoader />
    </div>
  );
}

export default LoadingPage;
