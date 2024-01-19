import { AiOutlineUserDelete } from 'react-icons/ai';
import { BtnItem, List, ListItem } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <BtnItem type="button" onClick={() => onDelete(id)}>
              <AiOutlineUserDelete />
              Delete
            </BtnItem>
          </ListItem>
        );
      })}
    </List>
  );
};
