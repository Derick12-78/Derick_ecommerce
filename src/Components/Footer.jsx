const Footer = () => {
    return (
        <div>
        <footer >
          
        <section className="row bg-danger text-center" id="footer">
              
                <div className="col-md-4">
                <h4 className="text-light">Contact Us <hr /></h4>
                    <p className="text-dark">Please contact if you you want to know more about us or in case of anything. And get  information from us.</p>
                    <p>Phone: 0759969163</p>
                    <p>Email: mwalimuderick5@gmail.com</p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-light">Services</h3>
                    <p>Selling products</p>
                    <p>Buying Products</p>
                    <h3 className="text-light">Location</h3>
                    <p>We are situated in Westlands, Nairobi, along Waiyaki Way, opposite Lions Place.</p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center text-light">Social Links</h4>
                    <br/>
                    <a href="http://twitter.com/@derick_mwa22474" className="m-3" target="_black">
                        <img src="images/twitter-64.webp" alt=""/>
                    </a>
                    <a href="http://instagram.com/mwalimuderick" className="m-3" target="_black">
                        <img src="images/phone5.webp" alt=""/>
                    </a>
                    <a href="http://wa.me/+254759969163" target="_blank" className="m-3" rel="noreferrer">
                    <img src="images/375_Whatsapp_logo-64.webp" alt="" /></a>
                    
                </div>
               </section>
               <div className="bg-dark text-light text-center p-2">
               <h5>Developed by Derick Mwalimu &copy; 2025.All rights reserved</h5>
               </div>
        
       </footer>
        </div>
       

      );
}
 
export default Footer;