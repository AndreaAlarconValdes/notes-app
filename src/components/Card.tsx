import { useState } from "react";
import "./card.css";
import RadialMenu from "./RadialMenu";

interface CardProps {
  id: number;
  color: string;
  content: string;
  onContentChange: (id: number, newContent: string) => void;
  onColorChange: (id: number, newColor: string) => void;
  onDelete: (id: number) => void;
  creationDate: string;
}

const Card: React.FC<CardProps> = ({
  id,
  color,
  content,
  onContentChange,
  onColorChange,
  onDelete,
  creationDate,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onContentChange(id, event.target.value);
  };

  const handleColorSelection = (newColor: string) => {
    onColorChange(id, newColor);
    setIsEditing(false); // Opcional: Cierra el modo de edición después de seleccionar el color
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <textarea
        style={{
          width: "250px",
          height: "200px",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
        }}
        value={content}
        onChange={handleContentChange}
        placeholder="This is a new note."
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: "0", fontSize: "14px", color: "#474747" }}>
          {creationDate}
        </p>
        <RadialMenu onColorSelect={handleColorSelection} onDelete={()=> onDelete(id)} />

      </div>
    </div>
  );
};

export default Card;
