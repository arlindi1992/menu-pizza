import classes from "./modal.module.css"

function Modal({pizzaData, onCancel, ajoutePanier}){
    
    return(
        <div className={classes["modal"]} >
            <div className={classes["modal-content"]}>
                <span className={classes["close"]} onClick={onCancel}>x</span>
                <img className={classes["modal-thumbnail"]} src={pizzaData.image}></img>
                <h2 className={classes["modal-title"]}>{pizzaData.name}</h2>
                <p className={classes["modal-price"]}>{pizzaData.price} €</p>
                <div className={classes["quantity-selector"]}>
                    <button className={classes["quantity-decrease"]}>-</button>
                    <span className={classes["quantity"]}>1</span>
                    <button className={classes["quantity-increase"]}>+</button>
                </div>
                <button className={classes["btn add-to-cart"]} onClick={ajoutePanier}>Ajouter au panier</button>
            </div>
        </div>
    )
}

export default Modal