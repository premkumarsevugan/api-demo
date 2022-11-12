import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
const CartPage = () => {
    const [ finalCart, setFinalCart ] = useState([]);

    const API_URL = 'http://localhost:3500/cart';
useEffect(() =>{
    const fetchItems = async () => {
        try{
            const response = await fetch(API_URL);
            if(!response.ok) throw Error("Did not recieve expected Data");
            const listItems = await response.json();
            setFinalCart(listItems);
        } catch(err){
            console.log(err.stack);
        }
        finally{

        }
    }
    (async() => await fetchItems())();
},[]);

    
    return (
        <div>
            <Navbar />
            <h1 className="Head">Your Cart</h1>
            <div className="AvailableItems">
            {
                finalCart.map((item) => (
                    <div className="card-items">
                    <div className="card-img">
                        <img src={item.src} alt="Image Problem Need to Be Rectify" />

                    </div>
                    <div className="card-detail">
                        <h2>{item.name}<span className="price">&#x20B9; {item.price} &nbsp;&nbsp;</span></h2>
                        {/* <h3> &#x20B9; {item.price}</h3> */}
                        <button>Remove</button>
                    </div>
                    
                </div>
                ))
            }
            </div>
            <div className="cart-conf-div">
            <button className="conf-btn">Confirm</button>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;