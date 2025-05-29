import deleteLogo from "../../assets/delete-image.svg";
import "./delete-button.css";
const apiUrl = import.meta.env.VITE_API_URL;

function DeleteButton({ dni, setIsDeleted, isDeleted }) {
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
  return (
    <button
      onClick={() => {
        if (confirm()) {
          deleteEmployee();
        }
      }}
      className="delete-button"
    >
      <img src={deleteLogo} alt="Delete image" width="10px" height="10px" />
    </button>
  );
}
export default DeleteButton;
