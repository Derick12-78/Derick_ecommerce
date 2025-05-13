import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is included
import 'bootstrap/dist/js/bootstrap.min.js'; 
import AddProduct from './Components/AddProduct';
import GetProducts from './Components/GetProducts';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingleProduct from './Components/SingleProduct';
import AboutUs from './Components/AboutUs';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Cart from './Components/Cart';




function App() {

  return (
    <Router>
     
      <Navbar  />

    
    <div >
        <Routes>
      <Route path ="/signup" element={<SignUp/>}/>
      <Route path='/signin' element = {<SignIn/>}/>
      <Route path='/' element = {<GetProducts />}/>
      <Route path='/addproduct' element = {<AddProduct/>}/>
      <Route path='/singleproduct' element = {<SingleProduct/>}/>
      <Route path='/aboutus' element = {<AboutUs/>}/>
      <Route path='/cart' element = {<Cart />}/>
        </Routes>
      </div>

   
      
  
    <Footer/>
    </Router>
  );
}

export default App;
