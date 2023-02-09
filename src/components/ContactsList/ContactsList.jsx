import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import Proptypes from 'prop-types';

export function ContactsList({ contacts }) {
  return (
    <ul>
          {contacts.map(({id, name, number}) => (
            <ContactListItem key={id} name={name} number={number} />
      )
      )}
    </ul>
  );
}
