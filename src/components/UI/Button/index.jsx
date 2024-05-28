const Button = ({ onClick, text, className = '' }) => {
  return (
    <button 
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${className}`} 
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button