import React, { useState,useEffect } from 'react';
import clock from "../images/clock.svg"
import API from './API'
import "./style/Recipes.scss"
import "./style/OrderDetails.scss";

const OrderDetail = ({orders, qtyCounter, setQtyCounter}) => {
    
    
    const [localOrders, setLocalOrders] = useState(orders)
    const [customerDetails, setCustomerDetails] = useState({
        "firstname": "",
        "lastname": "",
        "email": "",
        "password":"",
        "mobileNumber": "",
        "postcode": ""
    })

    //setOrders([...orders, order])
    
    const submitHandler = (event) => {
        event.preventDefault()
        localOrders.push({customer:customerDetails})

        API.postCustomer(customerDetails)
        API.postOrder(localOrders)
        
    } 


    const orderQtyChangeHandler = (e,id) => {
        const orders = [...localOrders]
        const selectedOrderIndex = orders.findIndex(order => order.id == id)

        orders[selectedOrderIndex].qty = parseInt(e.target.value)
        
        setLocalOrders(orders)
    }

    const customerInfoChangeHandler = (e) => {
        const {name,value} = e.target
        setCustomerDetails({...customerDetails,[name]: value})
    }

    return  <div className="orderDetails">
                <form onSubmit={submitHandler} className={'customersDetails'}>
                    <p className="title">your details</p>
                        <select>
                            <option>Title</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                        </select>
                        <div className="firstLast">
                            <input className="input" type="text" name="firstname" placeholder={'First Name*'} onChange={customerInfoChangeHandler} required />

                            <input className="input" type="text" name="lastname" placeholder={'Last Name*'} onChange={customerInfoChangeHandler} required />
                        </div>
                        <input className="input" type="email" name="email" placeholder={'Email Address*'} onChange={customerInfoChangeHandler} required />

                        <input className="input" type="text" name="password" placeholder={'Password*'} onChange={customerInfoChangeHandler} required />

                    <p className='title'>contact number<span>*</span></p>
                        <input className="input" type="text" name="lastname" placeholder={'Mobile Number*'} onChange={customerInfoChangeHandler} required />
 
                    <p className='title'>delivery address<span>*</span></p>
                        <input className="input" type="text" name="lastname" placeholder={'Postcode*'} onChange={customerInfoChangeHandler} required />
                  
                     <button type="submit">SUBMIT</button>
                </form>

                <ul className="orders">

                {localOrders.map(order => (
                    <div className="recipe">  
                        <li key={order.recipe.photo} className="recipePhoto">
                            <img src={`./burgers/${order.recipe.photo}`}></img>
                        </li>
                        <li key={order.recipe.title}>{order.recipe.title}</li>
                        <li key={order.recipe.id}>{order.recipe.description}</li>
                        <li><img src={clock}></img><span>{order.time}</span></li>
                        <li><input type="number" min={0} max={10} value={order.qty} onChange={(e) => orderQtyChangeHandler(e,order.id)}></input></li>
                    </div>
                    
                ))}
                </ul>
            </div>
}

export default OrderDetail;