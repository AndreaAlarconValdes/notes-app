interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: "white",
        backgroundColor: "black",
        borderRadius: "99px",
        width: "30px",
        height: "30px",
        marginBottom: '20px'
      }}
    >
      +
    </button>
  );
};

export default Button;
