export const Anecdotes = ({ text, votes }) => {
  return (
    <div>
      <p>{text}</p>
      <p> Has {votes} votes</p>
    </div>
  );
};
