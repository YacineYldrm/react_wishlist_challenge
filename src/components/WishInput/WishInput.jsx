import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../Context/Context";

const WishInput = () => {

    const [textInput, setTextInput] = useState("")
    const [optionInput, setOptionInput] = useState("")
    const wishList = useContext(WishListContext);
    const wishSetter = wishList.setWishArray;

    // update state  user input (object) wishArray state
    const addToWishList = () =>
    {
        event.preventDefault()
        const newWish = {
            name: textInput,
            priority: optionInput
        };

        wishSetter(wishGetter => [...wishGetter, newWish])
        setTextInput("");
    }

    return ( 
        <>
        <h2>Add a wish to your list</h2>
            <form>
                <input 
                onChange={(input) => setTextInput(input.target.value)} 
                type="text" id="userInput" 
                placeholder="Type in your wish" 
                value={textInput}
                />
                
                <select 
                defaultValue={1} 
                onChange={(input) => setOptionInput(input.target.value)}>
                    <option disabled value="1">Select priority</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                </select>
                <button onClick={addToWishList}>Add wish</button>
            </form>
        </>
    );
}

export default WishInput;