import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
       
        <div className='container'>
        <h2>Search CoWorking Space</h2> 
          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text'  />
            </div>
            <div className='box'>
              <span>Advance Filter</span>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
