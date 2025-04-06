import { takeLatest, put } from 'redux-saga/effects';
import { submitContactRequest, submitContactSuccess, submitContactFailure } from '../slices/contactSlice';

// Worker saga for contact form submission
function* submitContactSaga(action) {
  try {
    // In a real app, this would make an API call
    // For now, just simulate a successful submission
    yield new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
    
    // Add timestamp to submission
    const submissionWithTimestamp = {
      ...action.payload,
      timestamp: new Date().toISOString()
    };
    
    yield put(submitContactSuccess(submissionWithTimestamp));
  } catch (error) {
    yield put(submitContactFailure(error.message || 'Submission failed'));
  }
}

// Watcher saga for contact
export default function* contactSaga() {
  yield takeLatest('contact/submitContactRequest', submitContactSaga);
}