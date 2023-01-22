// import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactsList.module.css';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts, showFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

// export const ContactsList = ({ showFilteredContacts, handleDeleteContact }) => {
//   return (
//     <ul className={css.contactList}>
//       {showFilteredContacts.map(contact => (
//         <li key={contact.id} className={css.contactItem}>
//           <p className={css.contactInfoWrapper}>
//             <span className={css.contactName}>{contact.name}:</span>&nbsp;
//             <span className={css.contactNumber}>{contact.number}</span>
//           </p>

//           <DeleteBtn
//             type="button"
//             onDeleteContact={() => handleDeleteContact(contact.id)}
//             id={contact.id}
//             actionText=" Delete"
//           ></DeleteBtn>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ContactsList.propTypes = {
//   showFilteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   handleDeleteContact: PropTypes.func.isRequired,
// };

export const ContactsList = () => {
  const filter = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  const contacts = useSelector(showFilteredContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <p className={css.contactInfoWrapper}>
            <span className={css.contactName}>{contact.name}:</span>&nbsp;
            <span className={css.contactNumber}>{contact.number}</span>
          </p>

          <DeleteBtn
            type="button"
            onDeleteContact={() => handleDeleteContact(contact.id)}
            id={contact.id}
            actionText=" Delete"
          ></DeleteBtn>
        </li>
      ))}
    </ul>
  );
};
