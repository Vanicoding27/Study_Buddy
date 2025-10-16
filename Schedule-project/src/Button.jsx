function Button({ placeholder, Click }) {
  return (
    <button
      id="askBtn"
      onClick={Click}
      className="bg-blue-900 text-white m-5 px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
    >
      {placeholder}
    </button>
  );
}

export default Button;