import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export function ContactsList({ contacts, onButtonDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onButtonDelete={onButtonDelete}
          buttonId={id}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

