import type { Note } from "../types/note-object";
import { FormModal } from "./FormModal";
import "./Card.css";
import { useState } from "react";

export const Card: React.FC<Note> = ({
  id,
  title,
  description,
  color,
  category,
  creationDate,
  creationTime,
  creationDay,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const note = {
    id,
    title,
    description,
    color,
    category,
    creationDate,
    creationTime,
    creationDay,
  };

  return (
    <>
      <div
        className="card-container"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="content-section">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="footer">
          <div className="date">
            <span className="material-symbols-outlined">timer</span>
            <p className="creation-time">
              {creationDay} {creationDate}, {creationTime}
            </p>
          </div>
          <span
            onClick={openModal}
            className="material-symbols-outlined edit-btn"
            
          >
            edit
          </span>
        </div>
      </div>
      {isModalOpen && <FormModal closeModal={closeModal} note={note} />}
    </>
  );
};
