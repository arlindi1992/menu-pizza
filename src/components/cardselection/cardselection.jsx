import classes from './cardselection.module.css';

function Cardselection({pizzaData }) {

    const ajoutePanier = () => {
        return (
            <div key={pizzaData.id}> 
                {pizzaData.name} - {pizzaData.pr} 
                <p>--------------</p>
            </div>
        )
    }

    const listPizzas = ajoutePanier.length > 0 ? ajoutePanier : <p>Votre panier est vide</p>;

    console.log(pizzaData)

    return(
        <aside className={classes["cart-section"]}>
            <h2>Votre Panier</h2>
            <div className={classes["cart-items"]}></div>
            <p className={classes["cart-total"]}>Total : 0.00 $</p>
            <br/>
            {listPizzas}
        </aside>
    )
}
export default Cardselection;