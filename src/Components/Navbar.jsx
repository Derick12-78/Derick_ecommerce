import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   let [navItem,setNavItem] = useState("");
   const user = JSON.parse(localStorage.getItem("user"))
   const cart = JSON.parse(localStorage.getItem("cartItems"))
   
  
   const handleLogout = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    setNavItem("logout");
   }
    return (  

        <section className="row">
        <div className="col-md-12">
            <div className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/" className="navbar-brand" onClick={()=>setNavItem("home")}>Shop Online</Link>

                <button className="navbar-toggler" data-bs-target="#prada" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="prada">
                    <div className="navbar-nav justify-content-space">
                        <Link to="/" className = {navItem ==="home"?"active":"navbar-link"} onClick={()=>setNavItem("home")}>Home</Link>
                        <Link to="/addproduct" className={navItem ==="add"?"active":"navbar-link"} onClick={()=>setNavItem("add")}>Add Product</Link>
                        <Link to ="/aboutus" className={navItem ==="about"?"active":"navbar-link"} onClick={()=>setNavItem("about")}>About Us</Link>
                        <div
                        className="cartCount">
                        {cart > 0 && user?<span className="bg-danger text-center text-light cart">{cart}</span>:""}
                        <Link to="/cart" className = {navItem ==="cart"?"active":"navbar-link"} onClick={()=>setNavItem("cart")}>Cart</Link>
                        
                        </div>

                    </div>
                    {user&&
                    <div className="navbar-nav ms-auto">
                        
                    <h2>Hello {user.username}</h2>
                        <Link to="/signin" className={navItem ==="logout"?"active":"navbar-link"} onClick={handleLogout}>Log out</Link>
                        
                    </div>
                }

                    {!user&&
                    <div className="navbar-nav ms-auto">
                        
                  
                        <Link to="/signin" className={navItem ==="login"?"active":"navbar-link"} onClick={()=>setNavItem("login")}>Login</Link>
                        <Link to="/signup" className={navItem ==="signup"?"active":"navbar-link"} onClick={()=>setNavItem("signup")}>Register</Link>
                   
                        
                    </div>
                }
                </div>
            </div>
        </div>
     </section>
    );
}
 
export default Navbar;