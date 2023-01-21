import { createSlice } from '@reduxjs/toolkit';

const initialStateForContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateForContacts,
  reducers: {
    addToContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { addToContacts } = contactsSlice.actions;
