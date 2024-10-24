import './App.css';
import logo from "./assests/logo.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Order from './components/Order';
import Contact from './components/Contact';
import Buy1 from './components/buya/Buy1';
import cart_icon from './assests/buy/cart_icon.png';
import Cart from './components/Cart.jsx';
import Icon from './components/Icon.jsx';
import { useContext, useState } from 'react';
import { ShopContext } from './components/ShopContext.jsx';
// import AuthContext, { AuthProvider } from './components/AuthContext.jsx';
// import { Navigate } from 'react-router-dom';
function App() {
  // const { isAuthenticated } = useContext(AuthContext);
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, getTotalCartItems } = useContext(ShopContext);
  const [open, isopen] = useState(false)
  let quantity = 0;

  return (
    <>
      {
        all_product.map((detail, index) => {
          if (cartItems[detail.id] > 0) {
            quantity = quantity + cartItems[detail.id]
          }
          return null;
        })
      }
      <BrowserRouter>
        {/* <AuthProvider> */}
        <section>
          <header class="text-gray-600 bg-red-100 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link to="./" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img class="object-contain md:object-scale-down" alt="hero" src={logo} height="200px"
                    width="200px" />
                </div>
              </Link>
              <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link to="./" class="mr-5 hover:text-gray-900"><b>Home</b></Link>
                <Link to="./About" class="mr-5 hover:text-gray-900"><b>About</b></Link>
                <Link to="./Order" class="mr-5 hover:text-gray-900"><b>Order</b></Link>
                <Link to="./Contact" class="mr-5 hover:text-gray-900"><b>Contact Us</b></Link>
              </nav>
              <div class="flex justify-center">
                <Link to="./Icon" onClick={() => {
                  isopen(true)
                }} class="mr-5 text-gray-800 " data={isopen}>
                  <span style={{ marginTop: "15px", background: "#AC6DB7", fontSize: "10px", padding: "4px", borderRadius: "50px" }}>{quantity}</span><img src={cart_icon} alt='icon' /></Link>
              </div>
              <Link to="/Login" class="inline-flex text-black bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500 rounded text-lg">Log In</Link>
              <Link to="/Signup" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500 rounded text-lg">Sign Up</Link>
            </div>
          </header>
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Buy1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='Order/:id' element={<Buy1 />} />
          <Route path='/cart/:id' element={<Cart />} />
          <Route path='/icon' element={<Icon />} />
          {/* <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} /> */}
          {/* <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} /> */}
          <Route path='/cart' element={<Cart />} />
        </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter >
    </>
  );
}
export default App;



