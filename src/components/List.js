import '../App.css'
import {useState, useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import CartContext from '../CartContext';
function List()
{
    const { cart,addToCart } = useContext(CartContext);
    const [data,setData]= useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const navigate=useNavigate();
    const navigateToCart = () => {
        navigate('/cart');
    };
    async function fetchData(){
     const result = await fetch('https://dummyjson.com/products');
     const r = await result.json();
     setData(r);
    }
    console.log("Out:",data);
    return (
        <div>
            <div className="container">
            {data? (
                <ul>
                    {data.products.map((product)=>(
                        <div key={product.id} className="card">
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <img src={product.images[0]} alt={product.title}/>
                            <button onClick={()=>addToCart(product)}>Add To Cart</button>
                        </div>
                    ))}
                </ul>
            ):(<><h2>Loading data...</h2></>)}
            </div>
            <p><button onClick={navigateToCart} className="cart">No of items in cart:{Object.keys(cart).length}</button></p>
        </div>

    );
}
export default List