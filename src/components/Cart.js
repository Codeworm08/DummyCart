import '../App.css'
import {useState, useEffect, useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import CartContext from '../CartContext';
function Cart()
{
    const { cart, removeFromCart } = useContext(CartContext);

    const handleRemove = (itemId) => {
      removeFromCart(itemId);
    };
    const getPrice = () => {
      let total =0;
      Object.values(cart).forEach((product)=>{
        total+=product.price;
      });
      return total.toFixed(2);
    };
    if (Object.keys(cart).length === 0) {
      return (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">Go back to Product List</Link>
        </div>
      );
    }
    return (
        <div>
              <div className='container'>
                <ul>
                    {Object.values(cart).map((product)=>(
                        <div key={product.id} className='card'>
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <img src={product.images[0]} alt={product.title}/>
                            <button onClick={()=>handleRemove(product.id)}>Remove</button>
                        </div>
                    ))}
                </ul>
              </div>
            <div className='price'>
            <h3>Total Price= ${getPrice()}</h3>
            </div>
            <Link to="/" className='cart'>Go Back</Link>
        </div>
    )
}
export default Cart