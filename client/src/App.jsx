import "./index.css";
import "./components/layout/layout.css"
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  // Function to handle login link click
  const handleLoginLinkClick = () => {
    setIsLoginPage(true);
    console.log('isLoginPage set to true')
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar onLoginLinkClick={handleLoginLinkClick} />
        {/* Conditionally render Header based on isLoginPage if needed */}
        {!isLoginPage && <Header />}
        <Outlet />
        {/* Conditionally render Footer based on isLoginPage */}
        {isLoginPage && <Footer />}
      </div>
    </ApolloProvider>
  );
};

export default App;
