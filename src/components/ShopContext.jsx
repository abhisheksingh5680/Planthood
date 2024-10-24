import React, { createContext, useReducer, useEffect } from "react";
import all_product from "../assests/buy/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, [action.itemId]: state[action.itemId] + 1 };
        case 'REMOVE_FROM_CART':
            return { ...state, [action.itemId]: state[action.itemId] - 1 };
        case 'SET_CART_ITEMS':
            return action.cartItems;
        default:
            return state;
    }
}
const ShopContextProvider = (props) => {
    const [cartItems, dispatch] = useReducer(cartReducer, getDefaultCart());
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch({ type: 'SET_CART_ITEMS', cartItems: JSON.parse(savedCart) });
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    const addToCart = (itemId) => {
        dispatch({ type: 'ADD_TO_CART', itemId });
    }
    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', itemId });
    }
    const getTotalCartAmount = (cartItemArray, allProduct) => {
        let totalAmount = 0;
        allProduct.forEach((productdata, index) => {
            if (cartItemArray[index] > 0) {
                totalAmount = totalAmount + productdata.price * cartItemArray[index];
            }
        });
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += all_product.filter((data) => {
                    return data?.id === cartItems[item]
                })
            }
        }
        return totalItem;
    }
    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;



