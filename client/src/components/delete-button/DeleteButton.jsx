import deleteLogo from "../../assets/delete-image.svg";
import "./delete-button.css";
function DeleteButton() {
  return (
    <button className="delete-button">
      <img src={deleteLogo} alt="Delete image" width="10px" height="10px" />
    </button>
  );
}
export default DeleteButton;
