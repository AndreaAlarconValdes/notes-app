import type { Note } from "../types/note-object";
import { FormModal } from "./FormModal";
import "./Card.css";
import { useState, useCallback } from "react";

export const Card: React.FC<Note> = (note) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <div
        className="card-container"
        style={{
          backgroundColor: note.color,
        }}
      >
        <div className="content-section">
          <h1>{note.title}</h1>
          <p>{note.description}</p>
        </div>
        <div className="footer">
          <div className="date">
            <span className="material-symbols-outlined">timer</span>
            <p className="creation-time">
              {note.creationDay} {note.creationDate}, {note.creationTime}
            </p>
          </div>
          <span
            onClick={openModal}
            className="material-symbols-outlined edit-btn"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal();
              }
            }}
            aria-label="Edit note"
          >
            edit
          </span>
        </div>
      </div>
      {isModalOpen && <FormModal closeModal={closeModal} note={note} />}
    </>
  );
};
