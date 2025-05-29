import editLogo from "../../assets/edit-image.svg";
import "./edit-button.css";
function EditButton() {
  return (
    <button className="edit-button">
      <img src={editLogo} alt="Edit image" width="10px" height="10px" />
    </button>
  );
}
export default EditButton;
