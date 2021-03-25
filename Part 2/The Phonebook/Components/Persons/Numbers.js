export const Numbers = ({ person }) => {
  return (
    <div>
      {person.map(per => <p key={per.name}>{per.name} {per.number}</p>)}
    </div>
  );
};
