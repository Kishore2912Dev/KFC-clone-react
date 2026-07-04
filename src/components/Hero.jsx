import React from 'react'
import swiggy from "../images/swiggy.webp"
import zomato from "../images/zomato.webp"
import kfc from "../images/kfc_png.webp"

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <span className="title">TASTE THE BEST KFC CHICKEN</span>
        <p>KFC (Kentucky Fried Chicken) is a globally renowned fast-food chain famous for its signature pressure-fried chicken seasoned with a closely guarded secret blend of 11 herbs and spices. It is the world's second-largest restaurant chain by sales, operating over 25,000 locations across more than 145 countries.The brand's story began in 1930 when Colonel Harland Sanders started selling fried chicken to hungry travelers at his roadside cafe in Corbin, Kentucky. Recognizing the potential of his unique recipe and cooking method, Sanders pioneered the fast-food franchising model in 1952. His smiling face in a white suit and black tie remains one of the most recognizable corporate mascots in the world.</p>
        
      <div className="btns">
        <button className="btn1">ORDER NOW</button>
        <button className="btn2">KFC CHICKEN</button>
      </div>

      <div className="social">
        <span className="social-1">Also Available On</span>
        <div className="social-icons">
          <img src={swiggy} alt="" />
          <img src={zomato} alt="" />
        </div>
      </div>

      </div>


      <div className="right">
        <img src={kfc} alt="" />
      </div>
    </div>
  )
}

export default Hero