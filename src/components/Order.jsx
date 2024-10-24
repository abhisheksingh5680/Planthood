import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
// import all_product from '../assests/buy/all_product'
import logo from "../assests/logo.png"

const Order = () => {
    const [all_product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products',{

        })
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch products', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;



    return (
        <div>
            <section class="text-gray-600 bg-white-100 body-font">
                <div class="container px-5 py-16 mx-auto   ">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {all_product?.map((detail, index) => {
                            return (
                                <div class=" rounded-t-3xl p-0 overflow-hidden border-2 border-gray-300">
                                    <Link to={`${detail?.id}`} class="block relative  overflow-hidden">
                                        <img alt="ecommerce" class="object-cover object-center rounded-t-3xl transition duration-700 ease-in-out delay-150 hover:opacity-50 hover:scale-110 w-full h-80 block" src={detail?.thumbnail} />
                                    </Link>
                                    <div class="mt-4 p-2">
                                        <h2 class="text-gray-500  leading-6 title-font text-base  font-medium">{detail.name}</h2>
                                        <div class="flex pt-2">
                                            <span class="title-font font-medium text-lg text-gray-600 mr-16">₹{detail.price}</span>
                                        </div>
                                        <div class="flex object-center  pt-2">
                                            <div class=" flex object-center  bg-green-400 w-10 h-5  font-family-poppins rounded-lg">
                                                <span class="text-slate-50 object-center box-border title-font text-sm  font-medium mx-1.5">★5</span>
                                            </div>
                                        </div>
                                        <div class="flex pt-2 font-medium items-center w-full  text-xs">
                                            EARLIEST DELIVERY:
                                            <span class="font-normal">In 3 hours</span>
                                            <Link to={`${detail?.id}`} class="flex ml-auto text-green  border-2 border-green-400 bg-gray-100  border-0 py-2 px-6 focus:outline-none rounded">  ADD</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        )}
                    </div>
                </div>

            </section >
            <footer class="text-gray-600 body-font bg-gray-100 ">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">

                            <nav class="list-none mb-9">
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">About Us</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Sell with us</Link>
                                </li>
                                
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Coupon and deals</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Cancellation and Refund</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">

                            <nav class="list-none mb-10">
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Term and Conditions</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Investor Relation</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Retails Stores</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Download App</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">

                            <nav class="list-none mb-10">
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Career</Link>
                                </li>                         <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Media</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link class="text-gray-900 hover:text-gray-800">Reviews</Link>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label for="footer-field" class="leading-7 text-sm text-gray-900">Placeholder</label>
                                    <input type="text" id="footer-field" name="footer-field" class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500 rounded">Button</button>
                            </div>
                            <p class="text-gray-900 text-sm mt-2 md:text-left text-center">Simplify your gifting experience with our App
                                <br class="lg:block hidden" />Spread the Love on Social Media
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-red-100">
                    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <Link class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img class="object-contain md:object-scale-down" alt="hero" src={logo} height="100px"
                                width="100px" />
                        </Link>
                        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© PLANTHOOD —
                            <Link href="https://www.linkedin.com/in/abhishek-singh-4965a1232" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@planthood</Link>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <Link class="text-gray-500" href="https://www.facebook.com/">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link class="ml-3 text-gray-500" href="https://twitter.com/ABHISHEK5680486">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link class="ml-3 text-gray-500" href="https://www.instagram.com/_mr_abhi_568/?igshid=YmMyMTA2M2Y%3D%22">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link class="ml-3 text-gray-500" href="https://www.linkedin.com/in/abhishek-singh-4965a1232">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div >
    )
};
export default Order
