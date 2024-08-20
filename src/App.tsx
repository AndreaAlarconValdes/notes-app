import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import ColorSelector from "./components/ColorSelector";

interface CardData {
  id: number;
  color: string;
  content: string;
  creationDate: string;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([
    {
      id: 1,
      color: "#facf7c",
      content: "Try adding your own note, choosing the colour, editing and deleting it.",

      
      creationDate: "August 19, 2024",
    },
    {
      id: 2,
      color: "#f4a57d",
      content:
        "This is a personal project to practice and improve my skills. You can find the code on my GitHub @AndreaAlarconValdes",
      creationDate: "August 19, 2024",
    },
    {
      id: 3,
      color: "#e7f199",
      content: "You can contact me through my email address alarconvaldes.a@gmail.com or through Linkedin @andreaalarconvaldes",
      creationDate: "August 19, 2024",
    },
  ]);
  const [isSelectingColor, setIsSelectingColor] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(4);

  const handleAddCardClick = () => {
    setIsSelectingColor(!isSelectingColor);
  };

  const handleCreate = (color: string) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    const newCard: CardData = { id: cardId, color, content: "", creationDate: currentDate };
  
    setCards([newCard, ...cards]);
  
    setCardId(cardId + 1);
    setIsSelectingColor(false);
  };

  const handleContentChange = (id: number, newContent: string) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, content: newContent } : card
      )
    );
  };

  const handleColorChange = (id: number, newColor: string) => {
    setCards(cards.map((card) =>
      card.id === id ? { ...card, color: newColor } : card
    ));
  };

  const handleDelete = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <main className="root">
      <div className="slide">
        {isSelectingColor ? (
          <div>
            <Button onClick={handleAddCardClick} ><span className="material-symbols-outlined" style={{fontSize: '22px'}}>
add
</span></Button>
            <ColorSelector onCreate={handleCreate} />
          </div>
        ) : (
          <Button onClick={handleAddCardClick} ><span className="material-symbols-outlined" style={{fontSize: '22px'}}>
add
</span></Button>

        )}
      </div>
      <div className="main">
        <h2 style={{ margin: "17px" }}>Notes</h2>
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              color={card.color}
              content={card.content}
              onContentChange={handleContentChange}
              creationDate={card.creationDate}
              onColorChange={handleColorChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
