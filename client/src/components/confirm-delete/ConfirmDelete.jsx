import "./confirm-delete.css";

function ConfirmDelete({ dni, setIsDeleting, deleteEmployee }) {
  return (
    <div className="confirm-delete-background">
      <div className="confirm-delete-box">
        <div className="confirm-delete-ask">
          <span>{`¿Desea borrar al empleado de DNI: ${dni}?`}</span>
        </div>
        <div className="confirm-delete-controllers">
          <button
            onClick={() => {
              setIsDeleting(false);
            }}
          >
            Reachazar
          </button>
          <button
            onClick={() => {
              deleteEmployee();
              setIsDeleting(false);
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
