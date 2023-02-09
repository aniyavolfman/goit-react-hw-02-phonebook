import PropTypes from 'prop-types';

export function ContactListItem({ name, number, onButtonDelete, buttonId }) {
  return (
    <li>
      {name}: <span>{number}</span>
      <button id={buttonId} onClick={onButtonDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onButtonDelete: PropTypes.func.isRequired,
};

