import React from 'react'
import { FaShoppingBasket, FaChevronRight, FaFacebook , FaYoutube,FaInstagram} from 'react-icons/fa';
import {FcCheckmark } from "react-icons/fc";
import { BsCaretRightFill , BsTwitter} from "react-icons/bs";
const Section1 = () => {
    return (

    
      <div>
              <div className='container choices'>
          <div className="row ">
                    <div className="col-md-6">

                        <h1>Good food choices <br /> are good  <br /> investments.</h1>
                        <p>Great Unusual taste for our esteemed <br /> Customers!</p>
                        <br />
                        <div>
                        <a href="" className='order'>Order Now <FaShoppingBasket/></a>
                            <a href="" className='learn'>Learn More <FaChevronRight/> </a>
                            </div>
                    </div>
                    <div className="col-md-6">
                        <img src="./image 1.png" alt="" className='img-fluid' />
                        </div>
          </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            
            <div className="cus">
                <div className="container customer">
                <div>
                    <h1>200+</h1>
                    <p>Kitchens</p>
                </div>
                 <div>
                    <h1>1000+</h1>
                    <p>Customers</p>
                </div>
                 <div>
                    <h1>100+</h1>
                    <p>Patners</p>
                </div>
                 <div>
                    <h1>10+</h1>
                    <p>Awards</p>
                </div>
                    </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="container pride">
                <div className="row">
                    <div className="col-md-6">
                        <img src="./image 2.png" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h1>We pride ourselves on <br /> making real food from <br /> the  best ingredient</h1>
                        <p>We use best ingredient stored in the <br /> best conditions to make the best meals for <br /> our esteemed customers.</p>
                        <br />
                        <div className='who'>
                        <a href="">Learn more</a>

                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="container best d-flex flex-row-reverse">
                <div className="row">
                    <div className="col-md-6">
                        <h1>We make everything by <br /> hand with the best possible ingredients</h1>
                        <p>Carefully made with love and care, we <br /> bring to you the delights of Mama's <br /> Kitchen.Made by the finest cooks we strive <br /> to provide you with healthy and delicious <br /> meals </p>
                        <br />
                        <br />
                            <li> <FcCheckmark className='mak'/> Nutritious ingredient</li>
                            <li> <FcCheckmark className='mak'/> Delicious Meals</li>
                        <li>  <FcCheckmark className='mak' /> Made by the finest cooks</li>
                        <br />
                        <a href="">Learn More</a>
                    </div>
                    
                    <div className="col-md-6">
                        <img src="./hello.png" alt="" className='img-fluid one' />
                        <img src="./image 4.png" alt="" className='img-fluid two'  />
                        <img src="./image 5.png" alt="" className='img-fluid'  />
                        <img src="./image 6.png" alt="" className='img-fluid'  />
                    </div>
                </div>
            </div>



<br />
                    <br />
                    <br />
                    <br />
            <div className="stomach">
                <h2>"When  a man's stomach is full it makes no <br /> difference whether he is rich or poor"</h2>
                <p>We use  the best ingredient stored in the best conditions to <br /> make the best meals for our esteemed customer</p>

                <div>
                    <p><BsCaretRightFill className='caret'/>Watch our story</p>
                </div>
            </div>

            <br />
            <br />
            <br />
            <section className="explore container">
                <h1>Explore our food</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-5">
                            <img src="./Rectangle 10.png" alt="" className='img-fluid' />
                            <h4>Ofada Special</h4>
                            <h2>#3500</h2>
                            <a href="">Order Now</a>
                        </div>
                        <div className="col-md-4 my-5">
                            <img src="./Rectangle 11.png" alt="" className='img-fluid' />
                            <h4>Wanke Delight</h4>
                            <h2>#4000</h2>
                            <a href="">Order Now</a>
                        </div>
                            <br />

                        <div className="col-md-4  my-5">
                            <img src="./Rectangle 12.png" alt="" className='img-fluid' />
                            <h4>Ewa Agoyin</h4>
                            <h2>#2000</h2>
                          
                            <a href="">Order Now</a>
                            <br />

                        </div>
                    </div>
                </div>
            </section>
             
            

            
            {/* FREQUENLY ASKED QUESTIONS */}
            <br />
            <br />
            <br />

            <section className="frequently">
                <h2>Frequently Asked Questions</h2>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className='fir'>Is unusual Kitchen really cooked fresh each day?</p>
                            <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6">
                            <p className='fir'>how healthy is these foods?</p>
                             <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6">
                            <p className='fir'>Can i order your products online?</p>
                             <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6">
                            <p className='fir'>When are you opening a shop near me?</p>
                             <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <br />
            <br />
            
            <section className="email">
                <div>
                    <h2>Hurry Up! Subscribe to our newsletter <br /> and get 25% off</h2>
                    <p>Limited time offer for this month. No credit card required</p>
                
                </div>
                <div className='text'>
                    <input type="text"  placeholder='Email Address here' />
                    <div>
                        
                    <a href="" className='my-5' >Subscribe</a>
                        
                </div>
                </div>
        </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <footer>
                <div className='reg'>
                    <p>Register</p>
                    <p>Forum</p>
                    <p>Affliate</p>
                    <p>FAQS</p>
                </div>
                <div className='icons'>
                    <FaFacebook   className='icon'/>
                    <BsTwitter className='icon' />
                    <FaYoutube  className='icon'/>
                 <FaInstagram className='icon ' /> 
                </div>
                <div className='copy'>
                    <p> Ⓒ	2022.Unusual Kitchen.All rights Reserved</p>
                </div>
            </footer>

      </div>
    
  )
}

export default Section1