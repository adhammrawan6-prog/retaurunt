import './Hero.css'
import React from 'react'

function Hero() {
  return (
    <div className='Hero' id='Hero'>

      <div className="content" >
        <h2>
          SPICE AND DELICIOUS <br />
          FAST FOOD
        </h2>

        <p>
          Enjoy a bold mix of flavor and freshness made for real cravings. From juicy burgers and crispy fries to spicy bites and refreshing drinks, every meal is prepared with care to give you the perfect fast food experience. We focus on great taste, quality ingredients, and fast service so you get exactly what you’re craving without waiting.

Whether you’re hungry on the go or chilling with friends, we’ve got the perfect meal ready for you anytime.
          </p>

        <button>Order Now</button>
      </div>

      <div className="image">
        <img src='https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80' alt="food" />
      </div>

    </div>
  )
}

export default Hero