import Cardlist from '../cardlist/cardlist.jsx';
import classes from "./main.module.css";
import Cardselection from "../cardselection/cardselection.jsx"
import Modal from "../modal/modal.jsx" // Import Modal component
import {useState} from 'react'
import { pizzas } from '../../../data.js';

function Main(){

    // function for deleting one pizza from cardSelection
    const removePizzaSelected = (id) => {
        setCart((prevState) => prevState.filter(pizza => pizza.id !== id));
    }

    // console.log(pizzaData + "Main component rendered");
    const [isModalOpen, setIsModalOpen] = useState(false);

    function onShowModal() {
        setIsModalOpen(!isModalOpen)
    }

    // State to manage products added to cart
    const [pizza, setPizza] = useState(null);
    const [cart, setCart] = useState([]);

    const onFetchProduct = (pizza) => {
        setPizza(pizza);
        onShowModal();
    }

    
    const onAddToCart = (pizza, quantity) => {
        
        // create new object pizzaWithQuantity
        const pizzaWithQuantity = { ...pizza, quantity: quantity };
        // update the setCard, arguments take from prevCard to be sure update will be correct
        setCart((prevCart) => [...prevCart, pizzaWithQuantity]); 
        onShowModal(); // open or close modal 
    }
    
    return(
        <main className={classes["main-container"]}>
            <Cardlist onFetchProduct={onFetchProduct}/>
            <Cardselection cart={cart} removePizzaSelected={removePizzaSelected}/>            
            {isModalOpen && <Modal pizzaData={pizza} onShowModal={onShowModal} onAddToCart={onAddToCart}/>}                   
        </main>
    )
}

export default Main;