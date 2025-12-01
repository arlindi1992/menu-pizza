import classes from "./cardlist.module.css";
import Card from "../cards/card.jsx";
import {pizzas} from "../../../data"
import { useState } from "react";
function Cardlist(){

    const [productItems, setProductItems] = useState([]);

    const onGetDetails = (data) => {
        console.log(data)
    }
    return(
        <div className={classes["menu-container"]}>
            {
                pizzas.map(function(p, index){
                        return (
                            <li key={p.id} >
                            <Card pizzaData={p} onEvent={onGetDetails}/>                            </li>
                        )
                })
                
            }
        </div>
    )
}

export default Cardlist;
