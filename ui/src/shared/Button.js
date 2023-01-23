const Button = ({ children, ...other }) => {
  return (
    <button
      {...other}
      className="bg-blue-400 p-2 m-1 rounded-md hover:bg-blue-200 active:bg-blue-500shadow-sm text-white text-sm font-medium"
    >
      {children}
    </button>
  );
};

export default Button;
