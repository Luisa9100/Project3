import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import {
  HiX,
  HiShoppingCart,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
} from "react-icons/hi";
import logo from "../Assets/noavatar.png";
import bookOne from "../Assets/3.jpg"; // with import
import bookTwo from "../Assets/2.jpg";
import bookThree from "../Assets/1.jpg";
import bookFour from "../Assets/4.jpg";
export default function () {
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);
  const [large, setLarge] = useState(false);
  const [render, setRender] = useState(0);
  const [count, setCount] = useState(0);
  const [imgCount, setImgCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([
    {
      id: 1,
      company_name: "Dr. Clarissa Pinkola Estés",
      item_title: "Women Who Run With The Wolves",
      description:
        "Within every woman there lives a powerful force, filled with good instincts, passionate creativity, and ageless knowing. She is the Wild Woman, who represents the instinctual nature of women. But she is an endangered species. For though the gifts of wildish nature belong to us at birth, society’s attempt to “civilize” us into rigid roles has muffled the deep, life-giving messages of our own souls. In Women Who Run with the Wolves, Dr. Clarissa Pinkola Estés unfolds rich intercultural myths, fairy tales, folk tales, and stories, many from her own traditions, in order to help women reconnect with the fierce, healthy, visionary attributes of this instinctual nature. Through the stories and commentaries in this remarkable book, we retrieve, examine, love, and understand the Wild Woman, and hold her against our deep psyches as one who is both magic and medicine. Dr. Estés has created a new lexicon for describing the female psyche. Fertile and life-giving, it is a psychology of women in the truest sense, a knowing of the soul.",
      total_price: 40,
      discount: 50,
      item_price: 20,
      stock: 4,
      quantity: 0,
      images: [
        { url: bookThree },
        { url: bookTwo },
        { url: bookOne },
        { url: bookFour },
      ],
    },
    {
      id: 2,
      company_name: "ABC limited",
      item_title: "Fall Limited Sneakers",
      description:
        "Sneakers are shoes primarily designed for sports or other forms of physical exercise, but which are also widely used for everyday casual wear.",
      total_price: 40,
      discount: 50,
      item_price: 20,
      stock: 8,
      quantity: 0,
      images: [
        { url: bookThree },
        { url: bookTwo },
        { url: bookOne },
        { url: bookFour },
        { url: logo },
      ],
    },
  ]);
  const [overlayURL, setOverlayURL] = useState(items[count].images[0].url);
  const [selectedNav, setSelectedNav] = useState("collection");

  const modalRoot = document.getElementById("modal-root");

  const Modal = (props) => {
    return ReactDOM.createPortal(
      <div className="overlay fixed inset-x-50 md:inset-x-48 lg:inset-x-62 xl:inset-x-72 top-32 md:w-2/4 lg:w-2/4 xl:w-2/4">
        {props.children}
      </div>,
      modalRoot
    );
  };
  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 768) {
      setLarge(true);
    }
  });
  function handleClick(count, data) {
    setOpen(true);
    setImgCount(count);
    setOverlayURL(data);
    console.log(data, "data", imgCount, "count", overlayURL);
    document.getElementById("blurred").style.filter = "blur(5px)";
    document.getElementById("unBlurred").style.filter = "blur(0)";
    setRender(render + 1);
  }
  function navImg(cnt) {
    if (cnt >= 0 && cnt < items[count].images.length) {
      setImgCount(cnt);
      setRender(render + 1);
      console.log(cnt, "nextimg", imgCount, items[count].images.length);
    } else {
      setImgCount(0);
    }
  }
  function closeOverlay() {
    setOpen(false);
    document.getElementById("blurred").style.filter = "blur(0)";
  }
  function addToCart(data) {
    console.log(data, "datacart", cart);
    if (cart.length) {
      for (let i in cart) {
        if (data.id == cart[i].id) {
          cart[i].quantity += quantity;
        } else {
          data.quantity = quantity;
          data["order_id"] = cart.length + 1;
          cart[cart.length] = JSON.parse(JSON.stringify(data));
        }
      }
    } else {
      console.log("init");
      data.quantity = quantity;
      data["order_id"] = cart.length + 1;
      cart[cart.length] = JSON.parse(JSON.stringify(data));
    }

    localStorage.setItem("watchCartArr", JSON.stringify(cart));
    console.log(items, "cart", cart);
  }

  return (
    <div className="m-auto justify-between items-center ">
      <div className={open ? "bgBlur" : "noBlur"}></div>
      <div className="md:flex h-full justify-between m-auto items-center ">
        <div className="sm:w-full md:w-1/2 md:m-10 flex flex-wrap items-center justify-center cursor-pointer">
          {large ? (
            <>
              <div
                className="flex flex-col justify-center items-center w-full"
                key={render}
              >
                <div
                  className="catelogPic"
                  onClick={() => handleClick(0, items[count].images[0].url)}
                >
                  <img src={overlayURL} className=" h-5/6 m-3" />
                </div>
                {/* {!open && (
                  <div className="flex justify-center">
                    <div
                      className="inline-flex m-1 catelogPicSmall"
                      id={imgCount == 0 ? "blurred" : "unBlurred"}
                      onClick={() => handleClick(0, items[count].images[0].url)}
                    >
                      <img
                        src={items[count].images[0].url}
                        className=" h-4/5"
                      />
                    </div>
                    <div
                      className="inline-flex m-1 catelogPicSmall"
                      id={imgCount == 1 ? "blurred" : "unBlurred"}
                      onClick={() => handleClick(1, items[count].images[1].url)}
                    >
                      <img
                        src={items[count].images[1].url}
                        className=" h-4/5"
                      />
                    </div>
                    <div
                      className="inline-flex m-1 catelogPicSmall"
                      id={imgCount == 2 ? "blurred" : "unBlurred"}
                      onClick={() => handleClick(2, items[count].images[2].url)}
                    >
                      <img
                        src={items[count].images[2].url}
                        className=" h-4/5"
                      />
                    </div>
                    <div
                      className="inline-flex m-1 catelogPicSmall"
                      id={imgCount == 3 ? "blurred" : "unBlurred"}
                      onClick={() => handleClick(3, items[count].images[3].url)}
                    >
                      <img src={items[count].images[3].url} className="h-4/5" />
                    </div>
                  </div>
                )}*/}
              </div>
            </>
          ) : (
            <div className="catelogPic w-full" key={render}>
              <img
                src={bookThree}
                // src={items[count].images[imgCount].url}
                className="catelogPicSm h-5/6"
              />
              {/* <span
                className="leftCaro rounded-full bg-white p-2"
                onClick={() => navImg(imgCount + 1)}
              >
                <HiOutlineChevronLeft className="text-lg" />
              </span>
              <span
                className="rightCaro rounded-full bg-white p-2"
                onClick={() => navImg(imgCount + 1)}
              >
                <HiOutlineChevronRight className="text-lg" />
              </span> */}
            </div>
          )}
        </div>
        {/* contents container */}
        <div className="md:w-1/2 md:m-10 flex-col items-center justify-center p-2">
          <div className="companyTitle text-left my-4 items-center justify-center">
            {items[count].company_name}
          </div>
          <div className="productTiltle text-left">
            {items[count].item_title}
          </div>
          <div className="productDecription text-left my-3">
            {items[count].description}
          </div>
          <div className="flex items-center text-left justify-between ">
            <div className="flex items-center text-left justify-start ">
              <span className="currentPrize text-left flex justify-start ">
                €{items[count].item_price}
              </span>
              <span className="discountValue">{items[count].discount}%</span>
            </div>
            {!large && (
              <div className="totalPrice">€ {items[count].total_price} </div>
            )}
          </div>
          {large && (
            <div className="totalPrice">€ {items[count].total_price} </div>
          )}
          <div
            className={
              large ? "flex my-6 cursor-pointer" : "my-6 cursor-pointer"
            }
          >
            <div className={large ? "flex w-full" : "flex w-full mb-2"}>
              <span
                className="decrease  py-2 px-4"
                onClick={() => {
                  quantity > 1 && setQuantity(quantity - 1);
                }}
              >
                -
              </span>
              <span className="count  px-4 md:px-8">{quantity}</span>
              <span
                className="incerase py-2 px-4"
                onClick={() => {
                  quantity < items[count].stock && setQuantity(quantity + 1);
                }}
              >
                +
              </span>
            </div>
            <div
              className="addCartButton py-2 md:py-4 px-4 md:px-8 cursor-pointer mx-3"
              onClick={() => addToCart(items[count])}
            >
              <HiShoppingCart className="cart" /> Add to cart
            </div>
          </div>
        </div>
      </div>
      <div id="modal-root">
        {open && large && (
          <Modal in={open} id="unBlurred" className="mb-2">
            <div className="overlayPanel">
              <img src={overlayURL} className="h-100" />
              <span className="close" onClick={() => closeOverlay()}>
                <HiX />
              </span>
            </div>
            {/* <div className="flex justify-center">
              <div
                className="inline-flex mx-3 catelogPicSmall"
                id={imgCount == 0 ? "blurred" : "unBlurred"}
                onClick={() => handleClick(0, items[count].images[0].url)}
              >
                <img
                  src={items[count].images[0].url}
                  width={"92px"}
                  height={"100px"}
                  className=""
                />
              </div>
              <div
                className="inline-flex catelogPicSmall"
                id={imgCount == 1 ? "blurred" : "unBlurred"}
                onClick={() => handleClick(1, items[count].images[1].url)}
              >
                <img
                  src={items[count].images[1].url}
                  width={"92px"}
                  height={"100px"}
                  className=""
                />
              </div>
              <div
                className="inline-flex mx-3 catelogPicSmall"
                id={imgCount == 2 ? "blurred" : "unBlurred"}
                onClick={() => handleClick(2, items[count].images[2].url)}
              >
                <img
                  src={items[count].images[2].url}
                  width={"92px"}
                  height={"100px"}
                  className=""
                />
              </div>
              <div
                className="inline-flex  catelogPicSmall"
                id={imgCount == 3 ? "blurred" : "unBlurred"}
                onClick={() => handleClick(3, items[count].images[3].url)}
              >
                <img
                  src={items[count].images[3].url}
                  width={"92px"}
                  height={"100px"}
                  className=""
                />
              </div>
            </div> */}
          </Modal>
        )}
      </div>
    </div>
  );
}
