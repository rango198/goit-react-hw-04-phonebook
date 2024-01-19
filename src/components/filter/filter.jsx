import { IoIosSearch } from 'react-icons/io';
import { Input } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      <div>
        <IoIosSearch />
        Find contacts by name
      </div>
      <Input
        type="text"
        name="filter"
        value={filter}
        placeholder="search"
        onChange={onChangeFilter}
      />
    </label>
  );
};
