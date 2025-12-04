import classes from "./modal.module.css"
import { useState } from "react";

function Modal({pizzaData, onShowModal, onAddToCart}){
    
    
    const buttonClickHandler = () => {
        onAddToCart(pizzaData, quantity);
    }

    // I would like to add state management here to handle quantity and total price calculation
    const [quantity, setQuantity] = useState(1);

    // increment quantity function
    const addPizza = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    // decrement quantity function
    const removePizza = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Ensure quantity doesn't go below 1
    }

    const calculatedPrice = pizzaData.price * quantity;


    return(
        <div className={classes["modal"]} >
            <div className={classes["modal-content"]}> 
                <span className={classes["close"]} onClick={onShowModal}>x</span>
                <img className={classes["modal-thumbnail"]} src={pizzaData.image}></img>
                <h2 className={classes["modal-title"]}>{pizzaData.name}</h2>
                <p className={classes["modal-price"]}>{calculatedPrice}  €</p>
                <div className={classes["quantity-selector"]}>
                    <button className={classes["quantity-decrease"]} onClick={(removePizza)}>-</button>
                    <span className={classes["quantity"]}>{quantity}</span>
                    <button className={classes["quantity-increase"]} onClick={(addPizza)}>+</button>
                </div>
                <button className={classes["btn add-to-cart"]} quantity={quantity} onClick={buttonClickHandler}>Ajouter au panier ({calculatedPrice.toFixed(2)} €)</button>
            </div>
        </div>
    )
}

export default Modal