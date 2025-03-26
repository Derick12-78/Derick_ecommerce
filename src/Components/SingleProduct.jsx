import axios from "axios";
import { Alert } from "bootstrap/dist/js/bootstrap.min";
import { useState } from "react";
import { useLocation,Link } from "react-router-dom";

const SingleProduct = () => {
    const img_url = "https://123derick.pythonanywhere.com/static/images/"
    const {product} =useLocation().state || {};

    let [phone,setPhone] = useState("");
    let [loading,setLoading] = useState("");
    let [error,setError] = useState("");
    let [success,setSuccess] = useState("");


    const submitForm =async (e)=>{
        e.preventDefault();

        setError("");
        setLoading("Please wait... processing payment...");

    try {
        const data = new FormData();
        data.append("amount", product.product_cost);
        data.append("phone",phone);

        const  response = await axios.post("https://123derick.pythonanywhere.com/api/mpesa_payment",data);

        setLoading("");
        
        setSuccess(response.data.message);
        setPhone("")
    } catch (error) {
        setLoading("");
        setError(error.message);
    }
    };
    return (  
        <div className="row justify-content-center mt-3">
            <div className="col-md-3 card shadow">
                <img src={img_url + product.product_photo} alt={product.product_name}/>
            </div>
            <div className="col-md-3 card shadow">
                <h3>{product.product_name}</h3>
                <h3 className="text-warning">Ksh{product.product_cost}</h3>
                <p className="text-muted">{product.product_desc}</p>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>

                <form onSubmit={submitForm}> 
                    <input type="number" readOnly hidden className="form-control" value={product.product_cost}/>
                    <br />
                    <input type="tel" required onChange={(e)=>setPhone(e.target.value)} className="form-control" value={phone} placeholder="Enter phone No 254xxxxxxxxxxx"/>
                    <br />
                    <button className="btn btn-primary"  >Pay Now</button>
                </form>
            </div>
        </div>
    );
}
 
export default SingleProduct;