import { useState, useEffect, useContext } from "react";
import { WishListContext } from "../Context/Context";

const WishItem = ({ name, priority, checked}) => {

    const { wishArray, setWishArray } = useContext(WishListContext);

    const [done, setDone] = useState(checked);

    const handleCheckStatus = () => {
        setDone(!done);
        const updatedWishes = wishArray.map((wish) =>
            wish.name === name ? { ...wish, checked: !done } : wish);
        setWishArray(updatedWishes);
    }

    const removeItem = () =>
    {
        const newWishArray = wishArray.filter((wish) => wish.name !== name ? wish : null)
        setWishArray(newWishArray);
        localStorage.setItem("wish", JSON.stringify(newWishArray));
    }

    useEffect(() => {
        localStorage.setItem("wish", JSON.stringify(wishArray));
    },[done])

    return ( 
        <li >
            <input 
            onChange={handleCheckStatus} 
            type="checkbox"
            checked={done}
            />
            <p  
            className={`${priority === "high" ? "bg-red-500" : "bg-green-500"} ${done ? "line-through text-gray-600" : null}`}>{name}</p>
            <button onClick={removeItem}>Delete</button>
        </li>
    );
}

export default WishItem;