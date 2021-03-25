export const Button = ({ name, fun, type }) => {
  return (
    <button type={type} onClick={fun}>
      {name}
    </button>
  );
};
