import Cardlist from '../cardlist/cardlist.jsx';
import classes from "./main.module.css";
import Cardselection from "../cardselection/cardselection.jsx"
import {useState} from 'react'

function Main(){
    const [isShow, setIsShow] = useState(false);

    const showModalHandler = () => {
        setIsShow(true)
    }
    
    return(
        <main className={classes["main-container"]}>
            <Cardlist />
            <Cardselection showModalHandler/>            
            {isShow && <Modal />}                       
        </main>
    )
}

export default Main;