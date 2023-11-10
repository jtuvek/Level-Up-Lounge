import { useState } from 'react'
import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import Header from './components/header.jsx'; // Import the Header component
import Footer from './components/footer.jsx'; // Import the Footer component
import SignUpForm from './components/SignUpForm.jsx';

function App() {

  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <Navbar />
      <Home />
      <Footer />
      <SignUpForm />
       </div>
  )}

export default App
