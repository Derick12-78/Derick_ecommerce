import React from 'react'
import Chatbot from './Chatbot'

const AboutUs = () => {
  return (
    <div>
      <h2 className='display-1 text-center text-dark'>ABOUT US</h2>
      <div>
        <p className='bg-warning text-muted'>Shop Online is a e-commerce website that enables people to buy products and also sell products online.
            Shop online is meant to prevent people from travelling costs and boreness of travelling to markets to buy and sell products.You can buy a product of your wish using Shop Online.
            We sell a wide variety of products including electronics like phones ,iron kettles,inpods and many more .We also sell all types of furnitures.On pay our products are delivered to your home place thus minimising travelling expenses and also save on time.
        </p>
        
      </div>

      <section className="row">
        <div className="col-md-6 text-center text-dark">
        <h3 className="display-4 text-center text-secondary ">OUR VISSION</h3>
        <p>To provide quality products for sell online ensuring efficiency and saving on time and also cost</p>

        </div>
        <div className="col-md-6 text-center text-dark">
          <h3 className="display-4 text-center text-secondary ">OUR MISSION</h3>
          <p>To ensure buying and selling of products online thus saving on time and travelling costs.</p>
        </div>
        <div className="card ">
          <h2 className="text-center text-dark">Chatbot</h2>
        <Chatbot/>
        </div>
        
      </section>
    </div>
  )
}

export default AboutUs
