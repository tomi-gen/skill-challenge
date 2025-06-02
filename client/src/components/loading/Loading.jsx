import "./loading.css";
import loadingImage from "../../assets/load-image.svg";

function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingImage} alt="Loading Image" width={"20px"} />
    </div>
  );
}

export default Loading;
