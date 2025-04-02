import { Link } from "react-router-dom";

const Navbar = () => {
   let user = localStorage.getItem("user")
    return (  

        <section className="row">
        <div className="col-md-12">
            <div className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/" className="navbar-brand">Shop Online</Link>

                <button className="navbar-toggler" data-bs-target="#prada" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="prada">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/addproduct" className="nav-link">Add Product</Link>
                        <Link to ="/aboutus" className="nav-link">About Us</Link>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <b>Hello {user.username}</b>
                        <Link to="/signin" className="nav-link">Login</Link>
                        <Link to="/signup" className="nav-link">Register</Link>
                        <Link to="/signin" className="nav-link" onClick={localStorage.clear("user")}>Log out</Link>
                        
                    </div>
                
                </div>
            </div>
        </div>
     </section>
    );
}
 
export default Navbar;