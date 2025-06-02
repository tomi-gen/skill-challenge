import "./confirm-delete.css";

function ConfirmDelete({ dni, setIsDeleting, deleteEmployee }) {
  return (
    <div className="confirm-delete-background">
      <div className="confirm-delete-box">
        <div className="confirm-delete-ask">
          <span>{`The employee with DNI: ${dni} will be deleted. Do you want to continue?`}</span>
        </div>
        <div className="confirm-delete-controllers">
          <button
            onClick={() => {
              setIsDeleting(false);
            }}
          >
            Decline
          </button>
          <button
            onClick={() => {
              deleteEmployee();
              setIsDeleting(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
