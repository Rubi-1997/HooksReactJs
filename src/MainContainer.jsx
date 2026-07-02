import React from "react";
import { useState,useEffect } from "react";
import userData from "./data.json";

const MainContainer = () => {
  const [data, setData] = useState(userData);
  const [status, setStatus] = useState(false);
  const [cart, setCart] = useState([]);
  const [Items, setItems] = useState();

  const [ItemPrice, setItemPrice] = useState([]);

  let myData = [];

  console.log(userData);

  const handleClick = (ele) => {
    setStatus(true);
    setCart((prevData) => [...prevData, ele]);
    setCart([...cart, { ...ele, quantity: 1 }]);

    console.log(ele);
    console.log("hello");
    
 
              
  };
/* Increase qty of item which match the id */
  const IncreaseQty = (ele) => {
    const IsItemInCart = cart.find((item) => item.id === ele.id);

    if (IsItemInCart) {
      setCart(
        cart.map((item, key) =>
          item.id === ele.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...ele, quantity: 1 }]);
      
    }
  };
/* decrease qty of item which match the id */
  const DecreaseQty = (ele) => {
    const IsItemInCart = cart.find((item) => item.id === ele.id);

    if (IsItemInCart) {
      setCart(
        cart.map((item, key) =>
          item.id === ele.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...ele, quantity: 1 }]);
      
    }
/* condition for removing item which have less than 1 in quantity */
    if (ele.quantity===1 ) {
      const filterItem = cart.filter((eleFilter) => {
        return eleFilter.id!==ele.id;
      });
      console.log(filterItem)
        setCart(filterItem);
    }
  };
 
  
  /* find total of all items using reduce function */
const totalPrice=()=>{
  return cart.reduce((accumulator,currentItem)=>{
    /* parseInt(currentItem.Price.replace('$',"")) using parseInt for change into int type and replace use for remove "$" symbol before the price */
    return accumulator+(parseInt(currentItem.Price.replace('$',""))*currentItem.quantity)
  },0)
}

console.log(totalPrice())

  console.log(ItemPrice);

  return (
    <div className="px-24 w-full h-full">
      <div className="flex justify-center w-2/3 items-center gap-30 p-16 ">
        <div className=" flex flex-col justify-between items-center  ">
          <div className="  grid grid-cols-2 gap-x-30 gap-y-40  justify-center items-center h-full p-12">
            {data.map((ele, key) => {
              return (
                <div className=" flex flex-col h-full w-full hover:scale-[1.1] hover:shadow-xl transition-all">
                  <div className="shadow-md ">
                    <img
                      src={ele.Img}
                      className="rounded-xl w-full transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="rounded-2xl  w-full h-50 text-center card text-black">
                    <h2 className="font-bold p-1">{ele.Item}</h2>
                    <p className="font-bold">{ele.Price}</p>
                    <button
                      className="border py-1 rounded-3xl px-2 m-2 hover:bg-yellow-800"
                      onClick={() => handleClick(ele)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-8 w-[30%] flex justify-center  flex-col bg-gray-200 p-4 fixed top-10 right-0 rounded-xl z-50 ">
          <div className="">
            <h2 className="font-bold">Cart</h2>
          </div>
          <div>
            {cart.map((ele, key) => {
              
              // setItemPrice(total)
              return (
                <div className="flex p-4 ">
                  <div>
                    <img src={ele.Img} className="w-15"></img>
                  </div>
                  <div className="grid grid-cols-1 px-2 justify-between gap-2 w-full text-sm">
                    <div>
                      <h2>{ele.Item}</h2>
                    </div>
                    <div className="flex justify-between">
                      <p>{ele.Price}</p>
                      <div>
                        <button
                          className="px-1  card rounded-sm texl-center mr-1"
                          onClick={() => IncreaseQty(ele)}
                        >
                          +
                        </button>
                        {ele.quantity}
                        <button
                          className="px-1  card rounded-sm texl-center ml-1"
                          onClick={() => DecreaseQty(ele)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-center font-bold">
                   
                  </div>
                </div>
              );
             
            })}
          </div>
        <div className="text-center font-bold">Total:{totalPrice()}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
