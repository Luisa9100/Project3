import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HiShoppingCart,
  HiX,
  HiOutlineTrash,
  HiViewList,
} from "react-icons/hi";
import logo from "../Assets/noavatar.png"; // with import
export default function () {
  const [showError, setShowError] = useState(false);
  const [render, setRender] = useState(0);
  const [showcart, setShowcart] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [selectedNav, setSelectedNav] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setSelectedNav("collection");
  });
  function toggler() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }
  function showCart() {
    let cartFromLocalStorage = JSON.parse(localStorage.getItem("watchCartArr"));
    setCartItems(cartFromLocalStorage);
    let total = 0;
    if (cartFromLocalStorage) {
      setIsCart(true);
    } else {
      setIsCart(false);
    }
    for (let i in cartFromLocalStorage) {
      total +=
        cartFromLocalStorage[i].quantity * cartFromLocalStorage[i].item_price;
    }
    setTotalPrice(total);
    setShowcart(!showcart);
  }
  function closeOverlay() {
    setShowcart(false);
  }
  function removeItem(index) {
    let cartFromLocalStorage = JSON.parse(localStorage.getItem("watchCartArr"));
    let total = totalPrice;
    total -=
      cartFromLocalStorage[index].quantity *
      cartFromLocalStorage[index].item_price;
    // }
    // setTotalPrice(total)
    cartItems.splice(index, 1);
    // localStorage.setItem("watchCartArr", JSON.stringify(cart));
    localStorage.setItem("watchCartArr", JSON.stringify(cartItems));
    console.log(cartItems, "cartItems", localStorage);
    isCartFull();
    setRender(render + 1);
  }
  function isCartFull() {
    if (cartItems) {
      setIsCart(true);
    } else {
      setIsCart(false);
    }
  }

  return (
    <div>
      {/* <!-- Navbar goes here --> */}
      <div className="bg-white shadow-lg">
        <div className="mx-auto px-4">
          <div className="flex justify-between cursor-pointer">
            <div className="flex space-x-7">
              {/* <!-- Mobile menu button --> */}
              <div className="md:hidden flex items-center">
                <button
                  className="outline-none mobile-menu-button w-6 h-6"
                  onClick={() => toggler()}
                >
                  <HiViewList className="text-2xl" />
                </button>
              </div>

              {/* <div>
               
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="text-gray-800 text-lg font-black">
                    sneakers
                  </span>
                </a>
              </div> */}
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1">
                <NavLink
                  className="py-4 px-2 text-gray-400   hover:text-orange-500 font-semibold"
                  to="/books"
                >
                  Books
                </NavLink>
                <NavLink
                  className="py-4 px-2 text-gray-400  hover:text-orange-500 font-semibold"
                  to="/About"
                >
                  About
                </NavLink>
                <NavLink
                  className="py-4 px-2 text-gray-400  hover:text-orange-500 font-semibold"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="flex">
              <div className="flex items-center justify-end">
                <span
                  className="py-2 px-2 text-gray-500 rounded hover:bg-orange-500 text-lg mx-2"
                  onClick={() => showCart()}
                >
                  <HiShoppingCart className="cart" />
                </span>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-8 w-8 mr-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="hidden mobile-menu">
          <div className="flex-col md:items-center sideDrawer">
            <span onClick={() => toggler()} className="py-6 pl-4 ">
              <HiX />
            </span>
            <NavLink
              className="py-4 px-2 text-gray-400   hover:text-orange-500 font-semibold"
              onClick={() => toggler()}
              to="/Women"
            >
              Books
            </NavLink>
            <NavLink
              className="py-4 px-2 text-gray-400  hover:text-orange-500 font-semibold"
              onClick={() => toggler()}
              to="/About"
            >
              About
            </NavLink>
            <NavLink
              className="py-4 px-2 text-gray-400  hover:text-orange-500 font-semibold"
              onClick={() => toggler()}
              to="/Contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
        {/* Cart */}
        <div>
          {showcart && (
            <div
              className="cartOverlay w-3/4 md:w-2/4 lg:w-3/6 xl:w-2/6 2xl:w-1/4"
              key={render}
            >
              <span className="closeOverlay">
                <span className="font-bold text-lg text-black"> Cart</span>
                <span onClick={() => closeOverlay()}>
                  <HiX />
                </span>
              </span>
              {!isCart && (
                <span className="flex items-center justify-center text-lg text-gray-500">
                  {" "}
                  Your Cart is empty
                </span>
              )}

              {cartItems?.map((items, index) => {
                return (
                  <div key={index} className="cartOverlayItems">
                    <span className="text-left font-bold textSmall md:text-xs lg:text-sm xl:text-auto">
                      {index + 1} .
                    </span>
                    <span>
                      <img src={items.images[0].url} className="cartImage" />
                    </span>
                    <span className="flex flex-col">
                      <span className="textSmall md:text-xs lg:text-sm xl:text-auto text-left font-bold ">
                        {items.item_title}
                      </span>
                      <span className="text-left font-medium text-orange-500 textSmall md:text-xs lg:text-sm xl:text-auto">
                        {items.company_name}
                      </span>
                      <span className="text-left font-bold textSmall md:text-xs lg:text-sm xl:text-auto">
                        Qty : {items.quantity}
                      </span>
                    </span>
                    <span className="flex flex-col">
                      <span className="font-bold textMd md:text-xs lg:text-sm xl:text-auto text-green-500">
                        Price: {items.quantity * items.item_price}
                      </span>
                      <span className="font-bold textSmall md:text-xs lg:text-sm xl:text-auto text-gray-500">
                        {items.quantity} X {items.item_price}
                      </span>
                    </span>
                    <span className="remove" onClick={() => removeItem(index)}>
                      <HiOutlineTrash />
                    </span>
                  </div>
                );
              })}
              {isCart && (
                <>
                  <span className="finalPrice">
                    <span className="font-bold textMd md:text-xs lg:text-sm xl:text-auto">
                      {" "}
                      Total :
                    </span>
                    <span className="font-bold textMd md:text-xs lg:text-sm xl:text-auto text-green-500 pl-2">
                      {" "}
                      {totalPrice}
                    </span>
                  </span>
                  <span
                    className="checkOutBtn w-full py-2 px-4"
                    onClick={() => closeOverlay()}
                  >
                    Checkout
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
