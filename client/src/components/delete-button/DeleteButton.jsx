import deleteLogo from "../../assets/delete-image.svg";
import "./delete-button.css";
import ConfirmDelete from "../confirm-delete/ConfirmDelete";
import { useState } from "react";
import { useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

function DeleteButton({ dni, setIsDeleted, isDeleted, setUserMessage }) {
  const [isDeleting, setIsDeleting] = useState(false);
  function deleteEmployee() {
    fetch(`${apiUrl}/employees/${dni}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setIsDeleted(!isDeleted);
        setUserMessage(result.message);
      })
      .catch((error) => {
        setUserMessage(error.message);
      });
  }

  useEffect(() => {
    if (isDeleting) {
    }
  }, [isDeleting]);

  return (
    <>
      <button
        onClick={() => {
          setIsDeleting(true);
        }}
        className="delete-button"
      >
        <img src={deleteLogo} alt="Delete image" width="10px" height="10px" />
      </button>
      {isDeleting ? (
        <ConfirmDelete
          dni={dni}
          setIsDeleting={setIsDeleting}
          deleteEmployee={deleteEmployee}
        ></ConfirmDelete>
      ) : (
        <></>
      )}
    </>
  );
}
export default DeleteButton;
