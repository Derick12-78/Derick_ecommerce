import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from './Components/AddProduct';
import GetProducts from './Components/GetProducts';
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingleProduct from './Components/SingleProduct';
import AboutUs from './Components/AboutUs';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Sidebar from './Components/Sidebar';
import { useState } from 'react';




function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState);
  };
  return (
    <Router>
      {/* Navbar with dropdown */}
      <Navbar toggleSidebar={toggleSidebar} />

{/* Sidebar */}
{isSidebarVisible && <Sidebar />}

{/* Main content area */}
       
    
    <div className = "App">
      <header className = "App-header">
        SHOP ONLINE
      </header>
    </div>
    
    <div style={{ marginLeft: isSidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s' }}>
        <Routes>
      <Route path ="/signup" element={<SignUp/>}/>
      <Route path='/signin' element = {<SignIn/>}/>
      <Route path='/' element = {<GetProducts />}/>
      <Route path='/addproduct' element = {<AddProduct/>}/>
      <Route path='/singleproduct' element = {<SingleProduct/>}/>
      <Route path='/aboutus' element = {<AboutUs/>}/>
        </Routes>
      </div>

   
      
  
    <Footer/>
    </Router>
  );
}

export default App;
