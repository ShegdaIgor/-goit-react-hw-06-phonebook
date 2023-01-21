// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/selectors';
import css from './FilterContact.module.css';
import { filterContacts } from 'redux/filterSlice';

// export const FilterContact = ({ handleFilterContact, filter }) => (
//   <div className={css.inputWrapper}>
//     <label className={css.formLabel}>Find contacts by Name</label>
//     <input
//       type="text"
//       name="filter"
//       onChange={handleFilterContact}
//       value={filter}
//     />
//   </div>
// );

// FilterContact.propTypes = {
//   handleFilterContact: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

export const Filter = () => {
  const filter = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const handleFilterContact = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={css.inputWrapper}>
      <label className={css.formLabel}>Find contacts by Name</label>
      <input
        type="text"
        name="filter"
        onChange={handleFilterContact}
        value={filter}
      />
    </div>
  );
};
