import trashLogo from "../../assets/trash-image.svg";
import "./trash-button.css";
function TrashButton() {
  return (
    <button className="trash-button">
      <img src={trashLogo} alt="Trash image" width="10px" height="10px" />
    </button>
  );
}
export default TrashButton;
