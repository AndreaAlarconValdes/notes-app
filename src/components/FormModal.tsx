import "./FormModal.css";
import { CategoryColors, type Note, type NoteCategory } from "../types/note-object";
import { useEffect, useState } from "react";
import { useNotes } from "../hooks/useNotes";

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
  const [error, setError] = useState<string>("");
  const { createNote, updateNote, deleteNote } = useNotes();

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
    setError("");
  }, [note]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    
    if (trimmedTitle === "" || trimmedDescription === "") {
      setError("Title and description cannot be empty");
      return;
    }

    setError("");

    if (note) {
      updateNote({
        ...note,
        title: trimmedTitle,
        description: trimmedDescription,
        category,
        color: CategoryColors[category],
      });
    } else {
      createNote({
        title: trimmedTitle,
        description: trimmedDescription,
        category,
      });
    }
    
    closeModal();
  };

  const handleDelete = () => {
    if (note && window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note.id);
      closeModal();
    }
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
                backgroundColor: CategoryColors[cat],
                transform: category === cat ? "scale(1.1)" : "scale(1)",
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Description"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setDescription(e.target.value);
            setError("");
          }}
          value={description}
        ></textarea>
        {error && <p style={{ color: "#ff5959", margin: 0, fontSize: "14px" }}>{error}</p>}
        {note && (
          <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
            {creationDay} {creationDate} - {creationTime}
          </p>
        )}
        <footer>
          {note && (
            <button
              type="button"
              onClick={handleDelete}
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
