import { useState, useContext, useEffect } from "react";
import { WishListContext } from "../Context/Context";
import { v4 as uuidv4 } from "uuid"

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

        return <>
                    {wishArrayState.map((wish) => (
                        <div key={uuidv4()}>
                            <input 
                            onChange={(e) => 
                                e.target.checked ? e.target.nextSibling.classList.add('line-through', 'text-gray-600') : 
                                e.target.nextSibling.classList.remove('line-through', 'text-gray-600') } 
                            type="checkbox"/>
                            <p  
                            className={`${wish.priority === "high" ? "bg-red-500" : "bg-green-500"}`}>{wish.name}</p>
                            <button 
                            name={wish.name} 
                            onClick={removeWish}>Delete</button>
                        </div>
                    ))}
                </>
    }

    return ( 
        <section>
            <ListElement/>
        </section>      
)}

export default List;