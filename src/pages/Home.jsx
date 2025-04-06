import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our React Application</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-4">
          This is the home page of our application, built with React, Redux, and Tailwind CSS.
        </p>
        <p className="mb-4">
          This application demonstrates:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">React Router with public and private routes</li>
          <li className="mb-2">Redux state management with Redux Toolkit</li>
          <li className="mb-2">Form handling and validation</li>
          <li className="mb-2">Authentication flow</li>
          <li className="mb-2">Responsive design with Tailwind CSS</li>
        </ul>
        <p>
          Feel free to navigate around to explore different features of the application.
        </p>
      </div>
    </div>
  );
};

export default Home;