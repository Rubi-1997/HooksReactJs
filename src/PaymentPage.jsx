import React from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";




const PaymentPage = () => {

  const { cart, setCart } = useContext(UserContext);

    console.log(cart)

 const totalPrice = () => {
    return cart.reduce((accumulator, currentItem) => {
      /* parseInt(currentItem.Price.replace('$',"")) using parseInt for change into int type and replace use for remove "$" symbol before the price */
      return (
        accumulator +
        parseInt(currentItem.Price.replace("$", "")) * currentItem.quantity
      );
    }, 0);
  };

  return (
    <div className="px-24 w-full h-screen py-2">
      <div className="flex justify-center w-2/3 items-center gap-30 p-16 ">
        <div className=" flex flex-col justify-between items-center w-full px-8 ">
          <div className="flex">
            <div>
              <input type="radio" name="cash" value="react" className="mx-2" />
              Cash On Delivery
            </div>
            <div className="ml-8">
              <input type="radio" name="cash" value="" className="mx-2" />
              Credit Card
            </div>
          </div>
          <div className="mx-8 px-4 py-4 bg-gray-50 w-1/2 rounded-xl my-8 shadow">
            <label className="block font-bold text-sm py-1">
              Enter your card number:
            </label>
            <input
              placeholder="card number"
              type="text "
              className="rounded-full border px-1" checked
            ></input>
            <label className="block font-bold text-sm py-1">
              Enter your card's expiry date:
            </label>
            <input
              placeholder="card expiry"
              type="text"
              className="rounded-full border px-1" 
            ></input>
            <label className="block font-bold text-sm py-1">
              Enter your CVV number:
            </label>
            <input
              placeholder="CVV number"
              type="text"
              className="rounded-full border px-1"
            ></input>
          </div>
          <div className="">
            <button
              className="text-white py-2 rounded-xl px-3 shadow text-sm m-2 card hover:bg-yellow-700"
              
            >
              Confirm Payment
            </button>
          </div>
        </div>




        
        <div className="my-8 w-[30%] flex justify-center  flex-col bg-gray-200 p-4 fixed top-10 right-0 rounded-xl z-50">
          <div className="">
            <h2 className="font-bold">Cart</h2>
          </div>
          <div>
            {cart.map((ele, key) => {
              
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
                      <p className="font-bold">{ele.Price}</p>
                      
                    </div>
                  </div>
                  <div className="text-center font-bold"></div>
                </div>
               );
            })}
          </div>
          <div className="text-center font-bold">Total:${totalPrice()}</div>
          <div className="text-center mt-2">
            <NavLink
              to="/"
              className="text-white py-2 rounded-3xl px-3 shadow text-sm m-2 card hover:bg-yellow-700"
              
            >
              Go back to shopping
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
