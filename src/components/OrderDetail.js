import React, { useState,useEffect, useRef } from 'react';
import clock from "../images/clock.svg"
import API from './API'
import "./style/Recipes.scss"
import "./style/OrderDetails.scss";
import ThankYou from './ThankYou';

const OrderDetail = ({orders, setOrders, qtyCounter, setQtyCounter}) => {
    
    const inputRef = useRef();
    
    const [updatedQty , setUpdatedQty] = useState(qtyCounter)
    const [isSucessful,setIsSuccesful] = useState(false)
    const [localOrders, setLocalOrders] = useState(orders)
    const [customerDetails, setCustomerDetails] = useState({
        "firstname": "",
        "lastname": "",
        "email": "",
        "password":"",
        "mobileNumber": "",
        "postcode": ""
    })

    const isExistingCustomer = async() => {
        const existingCustomers = await API.getCustomers()    
        const isExistingCustomer = existingCustomers.find(customer => customer.email == customerDetails.email )
      
        return isExistingCustomer
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const isExist = await isExistingCustomer()

        if(!isExist) {  
            localOrders.push({customer:customerDetails})
            API.postCustomer(customerDetails)
            const response = await API.postOrder(localOrders)
            if(response) setIsSuccesful(true)
            
        }else {
            localOrders.push({customer:customerDetails})
            const response = await API.postOrder(localOrders)
            if(response) setIsSuccesful(true)
        }
            
        setLocalOrders([])
        setOrders([])
        setQtyCounter(0)
    } 


    useEffect (() => {
        const localCart = [...localOrders]
        const quantities = localCart.map(order => order.qty)

		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		const totalQty = quantities.reduce(reducer,0)
		setQtyCounter(totalQty)
    },[updatedQty])


    const orderQtyChangeHandler = (e,id) => {
        const orders = [...localOrders]
        const selectedOrderIndex = orders.findIndex(order => order.id == id)

        orders[selectedOrderIndex].qty = e.target.value ? parseInt(e.target.value) : 0
        setUpdatedQty(e.target.value)
        setLocalOrders(orders)
    }


    const customerInfoChangeHandler = (e) => {
        const {name,value} = e.target
        setCustomerDetails({...customerDetails,[name]: value})
    }

    const deleteHandler = (deleteItem) => {
        const orders = [...localOrders]
        const updatedCart = orders.filter((item) => {
            return item.id !== deleteItem.id
          }); 
        setLocalOrders(updatedCart)  
        setQtyCounter(qtyCounter - deleteItem.qty)
    }

    return  <>
        {isSucessful?  <ThankYou localOrders={localOrders}/> :
            <div className="orderDetails">
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
                        <input className="input" type="text" name="mobileNumber" placeholder={'Mobile Number*'} onChange={customerInfoChangeHandler} required />
 
                    <p className='title'>delivery address<span>*</span></p>
                        <input className="input" type="text" name="postcode" placeholder={'Postcode*'} onChange={customerInfoChangeHandler} required />
                  
                     <button type="submit">SUBMIT</button>
                </form>
                <div className='ordersEdit'>
                    <div className='basket'><span><img src={require("../images/basket.png")}></img></span><span>basket</span></div>
                    <div className="ordersWrapper">
                        <ul className="orders">
                            {localOrders.map(order => (
                                <div className="order">  
                                    <button className='delete' onClick={() => deleteHandler(order)}>X</button>
                                    <div className='recipe'>
                                        <li key={order.recipe.photo} className="recipePhoto">
                                            <img src={`./burgers/${order.recipe.photo}`}></img>
                                        </li>
                                        <div className="recipeDescription">
                                            <li key={order.recipe.title}>{order.recipe.serve}<span>2 burgers</span></li>
                                            <li key={order.recipe.id}>Ground beef, Potato Buns, Broccoli, Garlic, Baby Bok Choy, Hoisin Sauce, Sweet White Miso Paste, Mayonnaise, White Wine Vinegar, Black & White Sesame Seeds</li>
                                            <li><img src={clock}></img><span>{order.recipe.time}</span></li>
                                            <li className='editQty'><input ref={inputRef} type="number" min={0} max={10} value={order.qty} onChange={(e) => orderQtyChangeHandler(e,order.id)}></input></li>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div> 
                    <div className='recipePrice'>
                        <p></p>
                            <p>£<span>{15 * qtyCounter}</span></p>
                    </div>
                    <div className='delivery'>
                        <p>Delivery Fee</p>
                        <p>£15</p>
                    </div>
                    <div className='price'>
                        <p>TOTAL PRICE</p>
                            <p>£<span>{(15 * qtyCounter)+15}</span></p>
                    </div>
                </div>
            </div>
           }
            </>
}

export default OrderDetail;