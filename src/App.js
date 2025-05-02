import logo from './logo.svg';
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
import SwiperCarousel from './Components/SwiperCarousel';
import AboutUs from './Components/AboutUs';
import "bootstrap-icons/font/bootstrap-icons.min.css"



function App() {
  return (
    <Router>
       <Navbar/>
       
     

    <div className = "App">
      <header className = "App-header">
        SHOP ONLINE
      </header>
    
 
    </div>
    <Routes>
      <Route path ="/signup" element={<SignUp/>}/>
      <Route path='/signin' element = {<SignIn/>}/>
      <Route path='/' element = {<GetProducts/>}/>
      <Route path='/addproduct' element = {<AddProduct/>}/>
      <Route path='/singleproduct' element = {<SingleProduct/>}/>
      <Route path='/aboutus' element = {<AboutUs/>}/>

   
      
    </Routes>
<Footer/>
    </Router>
  );
}

export default App;
