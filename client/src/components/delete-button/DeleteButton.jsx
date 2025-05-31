import deleteLogo from "../../assets/delete-image.svg";
import "./delete-button.css";
import ConfirmDelete from "../confirm-delete/ConfirmDelete";
import { useState } from "react";
import { useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

function DeleteButton({ dni, setIsDeleted, isDeleted }) {
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
        console.log("Respuesta del servidor:", result);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
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
