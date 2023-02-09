import PropTypes from 'prop-types';

export function ContactListItem({ id, name, number }) {
  return (
    <li key={id}>
      {name}: <span>{number}</span>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};