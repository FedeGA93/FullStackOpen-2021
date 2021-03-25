export const Numbers = ({ person }) => {
  return (
    <div>
      {person.map(per => <p key={per.id}>{per.name} {per.number}</p>)}
    </div>
  );
};
