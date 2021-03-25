import { Button } from "../Button/Button";
export const Form = ({ handleNewPerson, handleNewName, handleNewNumber }) => {
  const addNewContact = (e) => {
    e.preventDefault();
    handleNewPerson(e);
    handleNewNumber(e);
  };

  return (
    <div>
      <form>
        <div>
          Name:   <input onChange={handleNewName} />
          <br/>
          Number: <input onChange={handleNewNumber} />
          <br/>
          <Button type={"submit"} name={"Add"} fun={addNewContact} />
        </div>
      </form>
    </div>
  );
};
