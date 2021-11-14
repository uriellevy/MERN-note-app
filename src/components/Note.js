import { FaTrash } from "react-icons/fa";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const removeNote = (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:5001/notes/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(id);
    handleDeleteNote(id);
  };
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FaTrash
          className="delete-icon"
          size="1.3em"
          onClick={() => removeNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
