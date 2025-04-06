import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/slices/authSlice';

const Dashboard = () => {
  const { user } = useSelector(selectAuth);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.email.split('@')[0]}</h2>
        <p className="mb-4">
          This is your private dashboard. You can only access this page when logged in.
        </p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <h3 className="font-medium mb-2">Your Account Information:</h3>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>
        <p>
          Here you would typically see your personal data, settings, and other private information.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;