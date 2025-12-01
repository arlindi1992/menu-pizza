import classes from "./card.module.css";
import Modal from "../modal/modal.jsx";
import { useState } from "react";

function Card({pizzaData, onEvent}){



    // const ajoutePanier = () => {
    //     return (
    //         <div key={pizzaData.id}> 
    //             {pizzaData.name} - {pizzaData.pr} 
    //             <p>--------------</p>
    //         </div>
    //     )
    // }

    // const listPizzas = ajoutePanier.length > 0 ? ajoutePanier : <p>Votre panier est vide</p>;

    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancelModal = () => {
        setIsModalOpen(false);
    }



    return(
        <section className={classes["menu-container"]}>
            <div className={classes["pizza-card"]}>
                <img src={pizzaData.image}></img>
                <h2> {pizzaData.name}</h2>
                <p className={classes["description"]}>{pizzaData.ingredients}</p>
                <p className={classes["price"]}> {pizzaData.price}</p>
                <div className={classes["buttons"]}>
                    <button onClick={showModal} >Comande</button>
                    
                </div>
            </div>
            {isModalOpen && <Modal onCancel={handleCancelModal} pizzaData={pizzaData} />}
            {/* {listPizzas} */}
        </section>
    )
}

export default Card;