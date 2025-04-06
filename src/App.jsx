import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from './redux/slices/authSlice';
import routes from './routes';
import "./App.css";

function App() {
  const { isAuthenticated } = useSelector(selectAuth);
  const routing = useRoutes(routes(isAuthenticated));
  
  return routing;
}

export default App;