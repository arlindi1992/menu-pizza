import classes from './cardselection.module.css';

function Cardselection({cart, removePizzaSelected}) {

    // Llogarisim totalin e përgjithshëm të shportës
    const totalAmount = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0).toFixed(2);

    const list = cart.map((item) => {
        return (
            <div key={item.id} className={classes["cart-item"]}>
                <span className={classes["cart-item-title"]}>{item.name} </span>
                <span className={classes["cart-item-title"]}> x {item.quantity} </span>
                <span>{(item.price * item.quantity).toFixed(2)} €</span>
                <button className={classes["remove-item"]} onClick={() => removePizzaSelected(item.id)}>x</button>
            </div>
        )
    })

    const listFinal = list.length > 0 ? list : "";

    return(
        <aside className={classes["cart-section"]}>
            <div className={classes["cart-title"]}>
                <h2  className={classes["cart-title"]}>Votre Panier</h2>
                <div className={classes["cart-items"]}>{listFinal}</div>
                <p className={classes["cart-total"]}>Total : {totalAmount} €</p>
                
            </div>
        </aside>
    )
}
export default Cardselection;