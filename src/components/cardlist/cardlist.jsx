import classes from "./cardlist.module.css";
import Card from "../cards/card.jsx";
import {pizzas} from "../../../data"
import { useState } from "react";
function Cardlist({onFetchProduct}){


    const onGetDetails = (data) => {
        console.log(data)
    }
    return(
        <div className={classes["menu-container"]}>
            {
                pizzas.map(function(p, index){
                    return (
                        <li key={p.id} >
                            <Card pizzaData={p} onEvent={onGetDetails} onFetchProduct={onFetchProduct}/>                            
                        </li>
                    )
                })
                
            }
        </div>
    )
}

export default Cardlist;
