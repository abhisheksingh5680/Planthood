import React, { useContext, useState } from 'react'
// import cart_icon from "../assests/buy/cart_icon.png"
// import Cart from './Cart'
// import { Link } from 'react-router-dom'
import { ShopContext } from '../components/ShopContext'
import Cart from './Cart';
const Icon = (data) => {
    const { getTotalCartItems } = useContext(ShopContext)

    const [open, isopen] = useState(data)
    const totalItems = getTotalCartItems();

    let quantity = 0;
    return (<div>



        {/* )} */}
        {open === true}<Cart></Cart>
    </div>

    );
};

export default Icon
