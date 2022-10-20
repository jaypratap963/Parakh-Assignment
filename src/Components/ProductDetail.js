import React, { useEffect, useState } from "react";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { cart } from "../Data";
import "./global.css";
const ProductDetail = (props) => {
  const [present, setPresent] = useState(false);
  function arrayRemove(value) {
    let tempCart = cart;
    tempCart.filter(function (element) {
      return element !== value;
    });
    cart.length = 0;
    cart.push(tempCart)
    cart.find(checkProduct) ? setPresent(true) : setPresent(false);
  }
  function handleAdd() {
    cart.push(props.detail.name);

    cart.find(checkProduct) ? setPresent(true) : setPresent(false);
  }
  function handleRemove() {
    arrayRemove(props.detail.name);
  }
  console.log(cart);
  function checkProduct(product) {
    return product === props.detail.name;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" id="name">{props.detail.name}</h5>
        <div className="d-flex flex-row-reverse" id="productCards">
          <h6 className="" id="price">{props.detail.price}</h6>
          <h6 className="card-subtitle mb-2 text-muted" id="price">Price : </h6>
        </div>
        {!present ? (
          <button onClick={handleAdd}>
            Add to Cart
            {/* <GrAddCircle /> */}
          </button>
        ) : (
          <button onClick={handleRemove}>
            Remove from Cart
            {/* <GrSubtractCircle /> */}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
