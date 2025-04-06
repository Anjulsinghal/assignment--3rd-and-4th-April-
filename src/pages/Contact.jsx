import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import SubmissionsTable from '../components/contact/SubmissionsTable';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <ContactForm />
      <SubmissionsTable />
    </div>
  );
};

export default Contact;