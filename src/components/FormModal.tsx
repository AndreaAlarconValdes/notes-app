import "./FormModal.css";
import { NoteContext } from "../context/NoteContext";
import { CategoryColors, type Note, type NoteCategory } from "../types/note-object";
import { useContext, useEffect, useState } from "react";

interface FormModalProps {
  closeModal: () => void;
  note?: Note | null;
}
export function FormModal({ closeModal, note = null }: FormModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [creationTime, setCreationTime] = useState("");
  const [creationDay, setCreationDay] = useState("");
  const [category, setCategory] = useState<NoteCategory>("others");

  const [color, setColor] = useState<string>(CategoryColors["others"]);
  const { createNote, updateNote, deleteNote } = useContext(NoteContext);

  useEffect(() => {
    setColor(CategoryColors[category]);
  }, [category]);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setCategory(note.category);
      setColor(note.color);
      setCreationDate(note.creationDate);
      setCreationTime(note.creationTime);
      setCreationDay(note.creationDay);
    } else {
      setTitle("");
      setDescription("");
      setCategory("important");
      setColor(CategoryColors["important"]);
      setCreationDate("");
      setCreationTime("");
      setCreationDay("");
    }
  }, [note]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("This field cannot be empty");
      return;
    }

    setTimeout(() => {
      if (note) {
        updateNote({
          ...note,
          title,
          description,
          category,
          color: CategoryColors[category],
          creationDate,
          creationTime,
          creationDay,
        });
      } else {
        createNote({
          title,
          description,
          color,
          creationDate,
          creationTime,
          creationDay,
          category,
        });
      }
      setTitle("");
      setDescription("");
      setCreationDate("");
      setCreationTime("");
      setCreationDay("");

      closeModal();
    }, 400);
  };
  const categoryColors: Record<NoteCategory, string> = {
    important: "#f4d79a",
    ideas: "#8cd5cb",
    reminder: "#f4a89e",
    pending: "#84daf6",
    others: "#d59ef6",
  };

  const categories: NoteCategory[] = [
    "important",
    "reminder",
    "ideas",
    "pending",
    "others",
  ];

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <form
        className="form"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">
          <span
            className="material-symbols-outlined close-btn"
            onClick={closeModal}
          >
            chevron_left
          </span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
            placeholder="Title"
          />
        </div>
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              style={{
                backgroundColor: categoryColors[cat],
                transform: category === cat ? "scale(1.1)" : "scale(1)",
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Description"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          value={description}
        ></textarea>
        {note && (
          <p>
            {creationDay} {creationDate} - {creationTime}
          </p>
        )}
        <footer>
          {note && (
            <button
              onClick={() => deleteNote(note.id)}
              style={{ backgroundColor: "#ff5959" }}
            >
              Delete
            </button>
          )}
          <button type="submit">{note ? "Save changes" : "Create note"}</button>
        </footer>
      </form>
    </div>
  );
}
