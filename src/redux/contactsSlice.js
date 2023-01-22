import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialStateForContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateForContacts,
  reducers: {
    addToContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { addToContact, deleteContact } = contactsSlice.actions;
