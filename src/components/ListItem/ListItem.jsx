import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';
import { Item, Button } from './ListItem.styled';

export const ListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const visibleNames = contacts.filter(item => {
    const hasNames = item.name.toLowerCase().includes(filter.toLowerCase());

    return hasNames;
  });

  return visibleNames.map(contact => {
    return (
      <Item key={contact.id}>
        <p>{contact.name} :</p>
        <p>{contact.number}</p>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </Button>
      </Item>
    );
  });
};
