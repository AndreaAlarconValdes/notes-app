interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
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
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
