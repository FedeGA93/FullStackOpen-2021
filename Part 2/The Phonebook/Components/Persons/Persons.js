import { Numbers } from "./Numbers";

export const Content = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <Numbers name={person.name} key={person.id}/>
      ))}
    </div>
  );
};
