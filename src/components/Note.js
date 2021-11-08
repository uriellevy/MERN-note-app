import { FaTrash } from "react-icons/fa";

const Note = () => {
  return (
    <div className="note">
      <span>gfgfdsfdsgfgfdsgfgd</span>
      <div className="note-footer">
        <small>13/2/2021</small>
        <FaTrash className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
