import classes from "./card.module.css";

function Card({pizzaData, onFetchProduct}){

    const buttonClickHandler = () => {
        onFetchProduct(pizzaData);
    }

    return(
        <section className={classes["menu-container"]}>
            <div className={classes["pizza-card"]}>
                <img src={pizzaData.image}></img>
                <h2> {pizzaData.name}</h2>
                <p className={classes["description"]}>{pizzaData.ingredients}</p>
                <p className={classes["price"]}> {pizzaData.price}</p>
                <div className={classes["buttons"]}>
                    <button onClick={buttonClickHandler} className={classes["order"]}>Comande</button>
                    
                </div>
            </div>
        </section>
    )
}

export default Card;