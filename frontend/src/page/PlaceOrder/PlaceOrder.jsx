import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { storeContext } from '../../Components/Context/StoreContext'
import axios from 'axios'
const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(storeContext)
  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  console.log("cartItem", cartItems)
  const onChangeHandler=(event)=>{
    const {name,value} = event.target
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder=async (event)=>{
    event.preventDefault()
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address: false,
      items: orderItems,
      amount: getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place", orderData,{headers:{token}})
    console.log("response", response)
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }
    else{ 
      console.log("error")
    }
  }
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required type="text" placeholder='First Name' onChange={onChangeHandler} value={data.firstName} name='firstName' />
          <input required type="text" placeholder='Last Name' onChange={onChangeHandler} value={data.lastName} name='lastName'/>
        </div>
        <input required type="email" placeholder='Email address' onChange={onChangeHandler} value={data.email} name='email'/>
        <input required type="text" placeholder='Street' onChange={onChangeHandler} value={data.street} name='street' />
        <div className="multi-fields">
          <input required type="text" placeholder='City' onChange={onChangeHandler} value={data.city} name='city'/>
          <input required type="text" placeholder='State'onChange={onChangeHandler} value={data.state} name='state'/>
        </div>
        <div className="multi-fields">
          <input required type="text" placeholder='Zip code' onChange={onChangeHandler} value={data.zipcode} name='zipcode'/>
          <input required type="text" placeholder='Country' onChange={onChangeHandler} value={data.country} name='country'/>
        </div>
        <input required type='text' placeholder='Phone' onChange={onChangeHandler} value={data.phone} name='phone'/>
      </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>cart totals</h2>
        <div className="cart-total-details">
          <p>subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount() === 0 ? 0 :getTotalCartAmount()+2}</b>
        </div>
      <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
