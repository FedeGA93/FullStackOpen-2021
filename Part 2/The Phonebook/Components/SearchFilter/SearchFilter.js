import { Title } from "../Title/Title";
export const SearchFilter = ({ handleSearchName }) => {
  
  return (
    <div>
      <Title text={"Search by Name"} />
      Search by Name: <input type="search" onChange={handleSearchName} />
    </div>
  );
};
