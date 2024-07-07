import React, { useContext ,useLayoutEffect} from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./cart.css"
import { useEffect } from 'react'
import { assets } from '../../new_images/assets'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import {Link,useNavigate} from "react-router-dom"

const Cart = () => {
  const { food_list, cartitems, removefromCart, addtoCart , getTotalAmount,token,url} = useContext(StoreContext)

const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
        navigate("/signin")
    }
},[token])

useEffect(()=>{
  navigate("/Cart")
},[])

useLayoutEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div className='cart'>
        <Navbar />
        <div className="cart-items">
          <div className="cart-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            <p>Add</p>
          </div>
          <br />
          <hr className='hr' />
          {food_list.map((items, index) => {
            if (cartitems[items._id] > 0) {
              return (
               <div>
                  <div className="cart-cont">
                    <div className="img">
                      <img src={url+"/images/"+items.image} className="item-img" alt="" />
                    </div>
                    <p>{items.name}</p>
                    <p>${items.price}</p>
                    <p>{cartitems[items._id]}</p>
                    <p>${items.price * cartitems[items._id]}</p>
                    <div className="rem">
                      <img src={assets.remove_icon_red} className="item-remove" alt="" onClick={() => removefromCart(items._id)} />
                    </div>
                    <div className="rem">
                      <img src={assets.add_icon_green} className="item-remove" alt="" onClick={() => addtoCart(items._id)} />
                    </div>
                </div>
              <hr className='hr' />
              </div>
              )
            }
          })

          }

        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className='cart-items-total'>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2.00}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p><strong>Total</strong></p>
                <p><strong>{getTotalAmount()}</strong></p>
              </div>
            </div>
            <button><Link rel="stylesheet" to="/order">Proceed To Chekout</Link></button>
          </div>

          <div className="cart-promocode">
          <p>If you have promo code, Enter it here</p>
          <div className='cart-promocode-input'>
            <input  placeholder='Promo code' className='sub' />
            <button>Submit</button>
          </div>
        </div>
        </div>
        <div className="foot">
      <Footer/>
      </div>
      </div>
     
    </>
  )
}

export default Cart

