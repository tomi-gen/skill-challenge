import { useEffect } from "react";
import editLogo from "../../assets/edit-image.svg";
import "./edit-button.css";
function EditButton({ rowData, setEditButtonClicked, setCompletedFields }) {
  return (
    <button
      onClick={() => {
        setEditButtonClicked(true);
        setCompletedFields(rowData);
      }}
      className="edit-button"
    >
      <img src={editLogo} alt="Edit image" width="10px" height="10px" />
    </button>
  );
}
export default EditButton;
