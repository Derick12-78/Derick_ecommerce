import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
let [username,setUsername] = useState();
let [password,setPassword] = useState();
let [loading,setLoading] = useState();
let [error,setError] = useState("");
let [success,setSuccess] = useState("");
let navigate = useNavigate();


const submitForm =async (e) => {
e.preventDefault()


try {
    setError("");
    setSuccess("");
    setLoading("Please wait...")
    const data = new FormData();
    data.append("username",username);
    data.append("password",password);
    const response = await axios.post("https://123derick.pythonanywhere.com/api/signin",data);

    if(response.data.user){

       localStorage.setItem("user",JSON.stringify(response.data.user));
       navigate("/");

    }else{

        setLoading("");
        setError(response.data.message);
     
    }
} catch (error) {
    setLoading("");
    setSuccess("");
    setError(error.message);
}

};

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
            
            <div className="col-md-6 card shadow p-4 bg-warning">
                <h2>Sign In <hr /></h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>

                <form onSubmit={submitForm}>
                    <input type="text" required className="form-control" placeholder="Enter your name" onChange={(e)=>setUsername(e.target.value)} /><br />
<div className="input-group">
<input type="password" required className="form-control" id="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
<span className="input-group-text" onClick={togglePassword}><i id="icon"class="bi bi-eye-fill"></i></span>
</div>
                    <br />
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    <div>          
                        <input type="checkbox"  required/><span>By continuing you agree to terms and conditions of using the website.</span>
                    </div>
                </form>
<div className="text-start">

                <p className="text-muted">Don't have an account?<Link to="/signup">Sign up</Link></p></div>
            </div>
        </div>
    );
}
 
export default SignIn;