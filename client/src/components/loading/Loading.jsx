import "./loading.css";
import loadingImage from "../../assets/load-image.svg";

function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingImage} alt="" width={"20px"} />
    </div>
  );
}

export default Loading;
