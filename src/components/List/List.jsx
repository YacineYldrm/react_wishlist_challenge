import { useState, useContext, useEffect } from "react";
import { WishListContext } from "../Context/Context";
import { v4 as uuidv4 } from "uuid"

const List = () => {

    const wishInput = useContext(WishListContext)
    const wishArray = wishInput.wishArray;

    const removeWish = (button) => {

        const newWishList = wishArray.filter((wish) => {
            if(wish.name !== button.target.name)
            {
                return wish;
            }
        })
        wishInput.setWishArray(newWishList)
        
    }
        
    const ListElement = () => {

        if(wishArray.length < 1)
        {
            return <p>Santa's inbox is empty! 🎅</p>
        }

        return <>
                    {wishArray.map((wish) => (
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