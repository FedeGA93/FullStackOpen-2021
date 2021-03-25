export const Total = ({ exercises }) => {
  const ex = [];
  exercises.forEach((element) => {
    ex.push(element.exercises);
  });
  const total = ex.reduce((s, p) => s + p);
  return (
    <div>
      <h5>Number of exercises {total} </h5>
    </div>
  );
};
