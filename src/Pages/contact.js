import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import logo from "../Assets/noavatar.png"; // with import
export default function () {
  const [showError, setShowError] = useState(false);
  const [render, setRender] = useState(0);
  const [showContent, setShowContent] = useState("");
  const [selectedNav, setSelectedNav] = useState("");

  useEffect(() => {
    setSelectedNav("collection");
  });
  function toggler() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }
  // function applyNav(element) {
  //     console.log(element, "meth", selectedNav)
  //     if (element == selectedNav) {
  //         let menu = document.querySelector(element);
  //         console.log(menu, "menu")
  //         menu.classList.add("border-orange-500");
  //         menu.classList.add("border-b-4");
  //     } else {
  //         let menu = document.querySelector(selectedNav);
  //         console.log(menu, "menu")
  //         menu.classList.remove("border-orange-500");
  //         menu.classList.remove("border-b-4");
  //     }
  //     setSelectedNav(element)
  // }
  function nextHandler(data) {
    setShowError(true);
    // for (let i in questions[data].options) {
    //     if (questions[data].options[i].isSelected && questions.length - 1 > data) {
    //         setCount(count + 1);
    //         setRender(render + 1);
    //         setShowError(false);
    //     }
    // }
    // if (questions.length - 1 == data) {
    //     setShowError(false);
    //     setIdx(data);
    // }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center  font-extrabold text-gray-900">
            {/* Sign in to your account */}
            If you want to publish your book here please contact me on
            luisagiglio@hotmail.it
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p> */}
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-t-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Text
              </label>
              {/* <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-b-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              /> */}
              <textarea
                id="text"
                name="text"
                rows="4"
                cols="50"
                placeholder="Type here"
                className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-b-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
              ></textarea>
            </div>
          </div>
          Drop your queries here, We will get back to you asap!
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                    border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div> */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
                  py-2 px-4 border border-transparent text-sm font-medium
                  rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    //   </>
  );
}
