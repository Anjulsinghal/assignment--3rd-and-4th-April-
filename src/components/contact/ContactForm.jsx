import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import { submitContactRequest } from '../../redux/slices/contactSlice';
import { validateContactForm } from '../../utils/helpers';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateContactForm(formData);
    
    if (Object.keys(errors).length === 0) {
      dispatch(submitContactRequest(formData));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <Input
        id="name"
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
        required
      />
      
      <Input
        type="email"
        id="email"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
        required
      />
      
      <TextArea
        id="message"
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        error={formErrors.message}
        required
      />
      
      <Button 
        type="submit" 
        disabled={loading}
        variant="primary"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};

export default ContactForm;