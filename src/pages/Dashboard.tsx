import { useState, useMemo, useCallback } from "react";
import "./Dashboard.css";
import { useNotes } from "../hooks/useNotes";
import type { NoteCategory } from "../types/note-object";
import { Card } from "../components/Card";
import { FormModal } from "../components/FormModal";

const FILTER_OPTIONS: {
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

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notes } = useNotes();
  const [filter, setFilter] = useState<NoteCategory | "todas">("todas");

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      filter === "todas" ? true : note.category === filter
    );
  }, [notes, filter]);

  const sortedNotes = useMemo(() => {
    return [...filteredNotes].sort((a, b) => b.timestamp - a.timestamp);
  }, [filteredNotes]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todas: notes.length };
    FILTER_OPTIONS.forEach(({ key }) => {
      if (key !== "todas") {
        counts[key] = notes.filter((note) => note.category === key).length;
      }
    });
    return counts;
  }, [notes]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
            {FILTER_OPTIONS.map(({ key, label, color }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                style={{ backgroundColor: color }}
              >
                {label} ({categoryCounts[key]})
              </button>
            ))}
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
