import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submissions: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    submitContactRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    submitContactSuccess: (state, action) => {
      state.submissions.push(action.payload);
      state.loading = false;
    },
    submitContactFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  submitContactRequest, 
  submitContactSuccess, 
  submitContactFailure 
} = contactSlice.actions;

// Selector
export const selectContactState = (state) => state.contact;
export const selectSubmissions = (state) => state.contact.submissions;

export default contactSlice.reducer;