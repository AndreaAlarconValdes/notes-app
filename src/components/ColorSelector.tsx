import React from 'react';

interface ColorSelectorProps {
  onCreate: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ onCreate }) => {
  const colors = [
    "#facf7c",
    "#f4a57d",
    "#be9df9",
    "#5bdafa",
    "#e7f199",
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {colors.map((color) => (
        <button
          key={color} 
          onClick={() => onCreate(color)}
          style={{
            width: '10px',
            padding: "10px",
            backgroundColor: color,
            color: "white",
            borderRadius: "999px",
            border: "none", 
            cursor: "pointer", 
            marginBottom: "15px", 
          }}
        ></button>
      ))}
    </div>
  );
};

export default ColorSelector;
