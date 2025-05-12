import { useContext, useState } from "react";
import "./Dashboard.css";
import { NoteContext } from "../context/NoteContext";
import type { NoteCategory } from "../types/note-object";
import { Card } from "../components/Card";
import { FormModal } from "../components/FormModal";

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notes } = useContext(NoteContext);
  const [filter, setFilter] = useState<NoteCategory | "todas">("todas");

  const filterOptions: {
    key: "todas" | NoteCategory;
    label: string;
    color: string;
  }[] = [
    { key: "todas", label: "All", color: "white" },
    { key: "important", label: "Important", color: "#f4d79a" },
    { key: "reminder", label: "Reminder", color: "#f4a89e" },
    { key: "ideas", label: "Ideas", color: "#8cd5cb" },
    { key: "pending", label: "Pending", color: "#84daf6" },
    { key: "others", label: "Others", color: "#d59ef6" },
  ];

  const filteredNotes = notes.filter((note) =>
    filter === "todas" ? true : note.category === filter
  );

  const sortedNotes = [...filteredNotes].sort(
    (a, b) => b.timestamp! - a.timestamp!
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="notes-page">
        <div className="button-section">
          <div className="title-section">
          <h1>All in order, all in notes. </h1>
<p>Organize your ideas, tasks and reminders in one place. Keep everything at your fingertips, clear and accessible, so nothing important slips through the cracks.</p>
</div>
          <button onClick={openModal}>
            <span className="material-symbols-outlined add-symbol">add</span>
            <p>Add New Note</p>
          </button>
        </div>
        <div className="notes-container">
          <div className="filters">
            {filterOptions.map(({ key, label, color }) => {
              const count =
                key === "todas"
                  ? notes.length
                  : notes.filter((note) => note.category === key).length;

              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  style={{ backgroundColor: color }}
                >
                  {label} ({count})
                </button>
              );
            })}
          </div>
          <div className="notes-list-container">
            {sortedNotes.map((note) => (
              <Card key={note.id} {...note} />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && <FormModal closeModal={closeModal} />}
    </>
  );
}
