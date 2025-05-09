import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SwiperCarousel from "./SwiperCarousel";


const GetProducts = ({toggleSidebar,updateQuantity}) => {

    let [products,setProducts] = useState([]);
    let [loading,setLoading] = useState("");
    let [error,setError] = useState("");
    let [filteredProducts,setFilteredProducts]= useState([]);
    const [cart, setCartState] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
      });
    const img_url = "https://123derick.pythonanywhere.com/static/images/"

  const setCart = (newCart) => {
    setCartState(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
    const navigate = useNavigate();

    const getProducts=async ()=>{

        try {
            setLoading("Please wait ...Receiving the available products...");
        const response = await axios.get("https://123derick.pythonanywhere.com/api/getproducts");
    

    setProducts(response.data);
    setFilteredProducts(response.data);
     setLoading("");
        
        
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    }

    const handleSearch = (value)=>{

        const filtered= products.filter((product)=>
        product.product_name.toLowerCase().includes(value.toLowerCase()))
        setFilteredProducts(filtered)
    }

    useEffect(()=>{
        getProducts();
    },[]);

    useEffect(() => {

        getProducts();
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
      }, []);
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
    
      const addToCart = (product) => {
        const exists = cart.find(p => p.product_id === product.product_id);
        if (exists) {
          setCart(cart.map(p =>
            p.product_id === product.product_id
              ? { ...p, quantity: p.quantity + 1 }
              : p
          ));
          alert("Product added to cart successfully")
        } else {
          setCart([...cart, { ...product, quantity: 1 }]);

          alert("Product added to cart successfully")
        }
      };
        
    

    return ( 
        
        <div className="row justify-content-center">
        
           <SwiperCarousel/>
           <div> 

            <h4 className="display-2 text-center">Available Products <hr /></h4>
            </div>
 
    
<b className="text-warning">{loading}</b>
<b className="text-danger">{error}</b>
<div className="row justify-content-center my-3">
    <div className="col-md-4">
        <input type="text" className="form-control" placeholder="Search product by name" onChange={(e)=>handleSearch(e.target.value)}/>
    </div>
</div>

{filteredProducts.map((product)=>(

<div className="col-md-3 justify-content-center mb-4">
<div className="card shadow cards"  key={product.product_id}>
    <img src={img_url + product.product_photo} alt="" className="image fluid mt-4" />
    <div className="card-body"  key={product.product_id}>
        <h5 className="mt-2">{product.product_name}</h5>
        <p className="text-muted">{product.product_desc.slice(0,20)}</p>
        <b className="text-warning">Ksh{product.product_cost}</b>
        <button className="btn btn-dark w-100 mb-4" onClick={()=> navigate("/singleproduct", {state: {product}})}>View product</button>
        <br /> 
        <button className="btn btn-primary w-100 mt-2" onClick={() => addToCart(product)}>
                            🛒 Add to Cart  </button>
    </div>
</div>
</div>
))}
        </div>
     );
}
 
export default GetProducts;