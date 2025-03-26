import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <h2 className='display-1 text-center text-dark'>About Us</h2>
      <div>
        <p className='bg-warning text-muted'>Shop Online is a e-commerce website that enables people to buy products and also sell products online.
            Shop online is meant to prevent people from travelling costs and boreness of travelling to markets to buy and sell products.You can buy a product of your wish using Shop Online.
        </p>
        
      </div>

      <section className="row">
        <div className="col-md-6 text-center text-dark">
        <h3 className="display-2 text-center text-secondary border">OUR VISSION</h3>
        <p>To privide quality products for sell online ensuring efficiency and saving on time and also cost</p>

        </div>
        <div className="col-md-6 text-center text-dark">
          <h3 className="display-2 text-center text-secondary border-bottom">OUR MISSION</h3>
          <p>To ensure buying and selling of products online</p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
