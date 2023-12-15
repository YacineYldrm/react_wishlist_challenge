import { useState, useContext, useEffect } from "react";
import { WishListContext } from "../Context/Context";
import { v4 as uuidv4 } from "uuid"
import WishItem from "../WishItem/WishItem";

const List = () => {

    const wishInput = useContext(WishListContext)
    const wishArrayState = wishInput.wishArray;

    // stringify data + update localStorage each time state changes
    useEffect(() => {
        localStorage.setItem("wish", JSON.stringify(wishArrayState))
    }, [wishArrayState])
    
    // remove item from list
    const removeWish = (button) => {

        const newWishList = wishArrayState.filter((wish) => {
            if(wish.name !== button.target.name)
            {
                return wish;
            }
        })
        wishInput.setWishArray(newWishList)
        
    }
    
    // conditional rendering
    const ListElement = () => {

        if(wishArrayState.length < 1)
        {
            return <p>Santa's inbox is empty! 🎅</p>
        }

        return <ul>
                    {wishArrayState.map((wish) => <WishItem
                        key={uuidv4()}
                        name={wish.name}
                        priority={wish.priority}
                        checked={wish.checked}
                        id={wish.id}
                    />
                    )}
                </ul>
    }

    return ( 
        <section>
            <ListElement/>
        </section>      
)}

export default List;