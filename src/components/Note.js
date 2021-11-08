import { FaTrash } from "react-icons/fa";

const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FaTrash className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
