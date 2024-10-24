import React, { useContext } from 'react';
import { ShopContext } from '../components/ShopContext';
import remove_icon from '../assests/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div class="text-gray-600 body-font bg-white-300  flex-wrap p-9 md:flex-row items-center">
            <div class="grid grid-cols-2 mx-auto md:grid-cols-6 p-9 gap-5 items-center text-center bg-red-100">

                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr class="h-3px bg-white-200" />
            {all_product.map((detail, index) => {
                if (cartItems[detail.id] > 0) {
                    return (
                        <div key={index}>
                            <div class="grid grid-flow-row md:grid-cols-6 p-9 gap-5 items-center text-center">
                                <img src={detail.image} alt="" class="w-12 h-12 object-cover mx-auto" />
                                <p>{detail.name}</p>
                                <p>₹{detail.price}</p>
                                <button class="w-15 text-center">{cartItems[detail.id]}</button>
                                <p>₹{detail.price * cartItems[detail.id]}</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => { removeFromCart(detail.id); }}
                                    alt=" "
                                    class="cursor-pointer mx-auto"
                                />
                            </div>
                            <hr class="my-2" />
                        </div>
                    );
                }
                return null;
            })}
            <form>
                <div class="flex flex-col md:flex-row justify-between gap-5 mt-4">
                    <div class="flex-1 min-w-[300px]">
                        <h1 class="text-xl font-semibold mb-2">Cart Totals</h1>
                        <div>
                            <div class="flex justify-between items-center">
                                <p>Subtotal</p>
                                <p>₹{getTotalCartAmount(cartItems, all_product)}</p>
                            </div>
                            <hr class="my-2" />
                            <div class="flex justify-between items-center">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr class="my-2" />
                            <div class="flex justify-between items-center">
                                <h3>Total</h3>
                                <h3>₹{getTotalCartAmount(cartItems, all_product)}</h3>
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={() => { alert("Order Placed!"); }}
                            class="mt-4 bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600"
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                    <div class="flex-1 min-w-[300px]">
                        <p class="mb-2">If you have a promo code, enter it here</p>
                        <div class="flex">
                            <input
                                type="text"
                                placeholder="Promo code"
                                className="border border-gray-300 p-2 flex-1 rounded-l"
                            />
                            <button class="bg-gray-300 text-gray-700 px-4 rounded-r hover:bg-gray-400">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default CartItems;
