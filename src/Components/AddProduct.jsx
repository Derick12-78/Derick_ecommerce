import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    let [product_name,setProductName] = useState("");
    let [product_desc,setProductDesc] = useState("");
    let [product_cost,setProductCost] = useState("");
    const fileInputRef = useRef(null);
    let [product_photo,setProductPhoto] = useState("");
    let [loading,setLoading] = useState("");
    let [error,setError] = useState("");
    let [success,setSuccess] = useState("");
    let user = JSON.parse(localStorage.getItem("user"))
    
    let navigate = useNavigate();

    const submitForm = async(e)=>{
e.preventDefault();

if(!user){
    navigate("/signin")
    alert("You must login first.")
}else{

try {
    if (fileInputRef.current){
        fileInputRef.current.value="";
    
    }
    setProductPhoto(null);
    setError("");
    setLoading("Please wait...");
    const data = new FormData();
    data.append("product_name",product_name);
    data.append("product_desc",product_desc);
    data.append("product_cost",product_cost);
    data.append("product_photo",product_photo);


    
       
    
        const response = await axios.post("https://123derick.pythonanywhere.com/api/addproduct",data);
        setLoading("");
        setSuccess(response.data.success);
        setProductName("");
        setProductDesc("");
        setProductCost("");
        setTimeout(()=>{
            setSuccess("")
        },3000)


    
} catch (error) {
    setLoading("");
    setError(error.message);
    
}
}

    }
    return (  
        <div className="row justify-content-center mt-4">
            
            <div className="col-md-6 card shadow p-4 bg-warning">
                <h3 className="display-3">Add A New Product <hr /></h3>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form onSubmit={submitForm}>
                    <input type="text" className="form-control" required placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)} value ={product_name}/><br />
                    <textarea name="" id="" className="form-control" placeholder="Product description" onChange={(e)=>setProductDesc(e.target.value)} value ={product_desc}></textarea>
                    <br />
                    <input type="number" className="form-control" required  placeholder="Product cost" onChange={(e)=>setProductCost(e.target.value)} value = {product_cost}/><br />
                    <label htmlFor="">Product Photo</label>
                    <input type="file" className="form-control" required onChange={(e)=>setProductPhoto(e.target.files[0])} ref={fileInputRef}/>
                    <br/>
            
                    <br />

                    <button className="btn btn-primary button">Add Product</button>
                </form>
            </div>

        </div>
    );
}
 
export default AddProduct;