import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SignUp = () => {
    let [username,setUsername] = useState("");
    let [email,setEmail] = useState("");
    let [phone,setPhone] = useState("");
    let [password,setPassword] = useState("");
    let [loading,setLoading] = useState("");
    let [error,setError] = useState("");
    let [success,setSuccess] = useState("");

    const submitForm = async(e)=>{
        e.preventDefault();
        try {
            setLoading("Please wait as we upload your data");
            const data = new FormData();
            data.append("username",username);
            data.append("email",email);
            data.append("phone",phone);
            data.append("password",password);

            const response =await axios.post("https://123derick.pythonanywhere.com/api/signup",data);
            setError("");
            setLoading("");
            setSuccess(response.data.success)

            setUsername("");
            setEmail("");
            setPhone("");
            setPassword("");
            
        } catch (error) {
            setLoading("");
           alert(error.message);
           
        }
    }

const togglePassword=()=>{
    const passwordInput = document.getElementById("password");
    const icon = document.getElementById("icon");

    let current_type = passwordInput.getAttribute("type");
    let new_type = ""
    if (current_type==="password")
    {
        new_type = "text" 
    
        icon.classList.remove("bi-eye-fill");
        icon.classList.add("bi-eye-slash-fill")}
    else{new_type = "password"
    
        icon.classList.add("bi-eye-fill");
        icon.classList.remove("bi-eye-slash-fill")    
    }
    passwordInput.setAttribute("type",new_type);
}

    return (  
        <div className="row justify-content-center mt-4">
            
        <div className="col-md-6 card shadow p-4 sign bg-muted">
            <h2>Sign Up <hr /></h2>
            <hr />
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <b className="text-success">{success}</b>
            <form onSubmit={submitForm}>
                <input type="text" className="form-control" required placeholder="Enter your name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br />
                <input type="email" className="form-control" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <input type="tel" className="form-control" required placeholder="Enter your phone No." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <br />
                <input type="password" className="form-control" required placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <br />
                <button  type ="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p>Already have an account?<Link to="/signin">Sign in</Link></p>
        </div>
        </div>
    );
}
 
export default SignUp;