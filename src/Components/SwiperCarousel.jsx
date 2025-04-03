import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const SwiperCarousel = () => {


let [products,setProducts] = useState([]);


const img_url = "https://123derick.pythonanywhere.com/static/images/"
const navigate = useNavigate();
const swiperCarousel = async()=>{

    try {
        
        const response = await axios.get("https://123derick.pythonanywhere.com/api/getproducts");
    

    setProducts(response.data);
    } catch (error) {
        
    }

}

useEffect(()=>{
swiperCarousel();
},[]);
  return (
    <div>
        <section className="row">
<Swiper modules = {[Navigation,Pagination,Autoplay]} navigation pagination = {{clickable:true}} autoplay={{delay:1000}} loop={true}  spaceBetween={20} breakpoints={{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}}>

      {products.map((product)=>(
        <SwiperSlide>

          <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={img_url + product.product_photo} alt=""  className="d-flex w-100  image-fluid image" swipercarousel/>

            <div className="carousel-caption">
                <h2>{product.product_name}</h2>
               
                <button className="btn btn-danger"  onClick={()=> navigate("/singleproduct", {state: {product}})}>Buy now</button>
            </div>
        </div>
        </div>
        </SwiperSlide>
    ))}
    </Swiper>
        </section>
    </div>
  )
}

export default SwiperCarousel
