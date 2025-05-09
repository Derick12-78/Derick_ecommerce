
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  let [loading,setLoading] = useState("");
  let [error,setError] = useState("");
  let [success,setSuccess] = useState("");
  let user =JSON.parse(localStorage.getItem("user"));
  const [cart, setCartState] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [cartTotal, setCartTotal] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const calculateTotal = () => {
    if (cart.length === 0) {
      setCartTotal(0);
      return;
    }

    const total = cart.reduce((sum, item) => {
      const cost = parseFloat(item.product_cost) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return sum + cost * quantity;
    }, 0);

    setCartTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const setCart = (newCart) => {
    setCartState(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
  localStorage.setItem("cartItems",JSON.stringify(totalItems));

  const removeFromCart = (productId) => {
    // Count how many items have the same ID
    const sameIdItems = cart.filter((item) => item.product_id  === productId);
   
    if (sameIdItems.length > 1) {
      // More than one item with same ID — remove only the first one
      let removed = false;
      const updatedCart = cart.filter((item) => {
        if (item.product_id  === productId && !removed) {
          removed = true;
          return false; // Skip the first match
        }
        return true;
      });
  
      setCart(updatedCart);
    } else {
      // Only one item with that ID — remove it entirely
      setCart(cart.filter((item) => item.product_id !== productId));
    }
  };
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.product_id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleMpesaCheckout = async () => {
    const normalizedPhone = phoneNumber
      .replace(/\s+/g, "")                // remove all whitespace
      .replace(/^(\+?254|0)/, "254");     // ensure phone starts with '254'

    if (!/^2547\d{8}$/.test(normalizedPhone)) {
      alert("Please enter a valid Safaricom phone number (e.g. 0712345678 or +254712345678)");
      return;
    }

    if (cartTotal <= 0) {
      alert("Cart is empty or total is invalid.");
      return;
    }
    if(!user){
      navigate("/signin")
      alert("You must signin first.")
  }else{
  try {
    const data = new FormData();
    data.append("amount", cartTotal);
    data.append("phone",normalizedPhone);

    const  response = await axios.post("https://123derick.pythonanywhere.com/api/mpesa_payment",data);

    setLoading("");
    
    setSuccess(response.data.message);
    setTimeout(()=>{
        setSuccess("");
    },3000);
    setPhoneNumber("");
 
} catch (error) {
    setLoading("");
    setSuccess("")
    setError(error.message);
}}
  }
  return (
    <div className="container mt-4">
      <h3 className="text-success">🛒 Your Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.product_id} className="col-md-3 mb-4 text-center">
              <div className="card shadow-sm">
                <img
                  src={`https://123derick.pythonanywhere.com/static/images/${item.product_photo}`}
                  alt={item.product_name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5>{item.product_name}</h5>
                    <p>{item.product_cat}</p>
                    <p>Price: Ksh {item.product_cost}</p>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.product_id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.product_id, parseInt(e.target.value, 10))
                      }
                      min="1"
                      className="form-control"
                      style={{ width: "60px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <div className="mt-4">
            <h4>Total: Ksh {cartTotal.toFixed(2)}</h4>
            <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
            <input
              type="tel"
              placeholder="Enter M-Pesa phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control my-2"
            />
            <div className="justify-content-center">
            <button className="btn btn-primary w-100 " onClick={handleMpesaCheckout}>
              Pay with M-Pesa
            </button>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;