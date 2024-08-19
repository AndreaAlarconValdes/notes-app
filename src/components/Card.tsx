import "./card.css"

interface CardProps {
  id: number;
  color: string;
  content: string;
  onContentChange: (id: number, newContent: string) => void;
  creationDate: string;
}

const Card: React.FC<CardProps> = ({ id, color, content, onContentChange, creationDate }) => {
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onContentChange(id, event.target.value);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <textarea 
       style={{ 
        width: '250px', 
        height: '200px',
        backgroundColor: 'transparent', 
        border: 'none', 
        outline: 'none',
        fontFamily: 'Arial, sans-serif', 
        fontSize: '16px', 
      }}
        value={content}
        onChange={handleContentChange}
       
        placeholder="This is a new note."
      />
       <p style={{margin:'0', fontSize: '14px', color: '#474747' }}>
        {creationDate}
      </p>
    </div>
  );
};

export default Card;
