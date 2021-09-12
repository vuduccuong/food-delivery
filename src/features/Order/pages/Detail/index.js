import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../ShopingCart/shopping-cart-slice";

const Detail = (props) => {
  const { id, type, name, ingredients, price, image } = props.food;
  const dispatch = useDispatch();

  const addCartHandle = () => {
    dispatch(addCart({ ...props.food, quantity: 1 }));
    props.closeHandle();
  };

  return (
    <aside className="transform top-0 right-0 w-full md:w-2/5 shadow-2xl bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 -translate-x-0">
      <div className="p-8">
        <button
          className="bg-gray-200 py-2 px-6 rounded-full"
          onClick={props.closeHandle}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <main className="text-center">
          <img src={image} alt={name} className="w-56 mx-auto mt-16 mb-8" />
          <span className="font-bold text-3xl">{name}</span>
          <span className="block text-gray-600 text-sm">{ingredients}</span>
          <span className="block text-custom-yellow mt-6 font-bold text-3xl">
            $ {price}
          </span>
          <span className="block mt-8">
            <input
              type="text"
              className="rounded-lg bg-gray-200 p-2"
              placeholder="add a note.."
            />
          </span>
          <button
            className="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6"
            onClick={addCartHandle}
          >
            Add to Order
          </button>
        </main>
      </div>
    </aside>
  );
};

export default Detail;
