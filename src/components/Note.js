const Note = ( {note, onDelete}) => {
  return (
      <div className="col-md-4">
        <div
          className="card shadow p-3 mb-5 bg-white rounded"
          id="my-card"
          role="dialog"
          aria-labelledby="myCard"
          aria-hidden="true"
        >
          <h3 className="card-header bg-info text-white" id="card-title">
            {note.title}
          </h3>

          <div className="card-body">
            <p className="card-text text-info" id="card-body">
              {note.content}
            </p>
          </div>
          <div className="d-flex align-items-start">
            <button
              type="button"
              className="btn btn-danger delete-note"
              id="delete-card" 
              onClick = {() => onDelete(note.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
 
  );
};

export default Note;
