import React, { useState } from "react";
import "./RadialMenu.css"; // Asegúrate de crear este archivo CSS
import Button from "./Button";

const RadialMenu: React.FC<{
  onColorSelect: (color: string) => void;
  onDelete: () => void;
}> = ({ onColorSelect, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    "#ffef85",
    "#facf7c",
    "#f4a57d",
    "#f7a1c4",
    "#be9df9",
    "#5bdafa",
    "#e7f199",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`radial-menu ${isOpen ? "open" : "closing"}`}>
      <Button onClick={toggleMenu}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "20px" }}
        >
          {isOpen ? "close" : "edit"}
        </span>
      </Button>
      {colors.map((color, index) => (
        <button
          key={index}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => {
            onColorSelect(color);
            setIsOpen(!isOpen);
          }}
        />
      ))}
      <button className="delete-button" onClick={onDelete}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "20px" }}
        >
          delete
        </span>
      </button>
      
    </div>
  );
};

export default RadialMenu;
