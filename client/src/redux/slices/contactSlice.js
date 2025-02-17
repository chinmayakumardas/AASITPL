// src/redux/slices/contactSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createContactApi, getContactsApi } from '@/api/contactApi';  // Corrected import

// Thunk to create a new contact
export const createContact = createAsyncThunk(
  'contact/createContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const newContact = await createContactApi(contactData);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to get all contacts
export const getContacts = createAsyncThunk(
  'contact/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getContacts
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Handle createContact
      .addCase(createContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
