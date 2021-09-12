import React, { useState } from "react";
import Card from "../../../../components/Card";
import ImageScale from "../../../../components/ImageScale";

const FoodItem = (props) => {
  const { image, name, ingredients, price, unit } = props.food;

  return (
    <Card onViewDetail={props.onViewDetail}>
      <ImageScale image={image} />
      <div className="m-3 text-center">
        <span className="font-bold text-xl">{name}</span>
        <span className="block text-gray-600 text-sm">{ingredients}</span>
        <span className="block text-custom-yellow mt-10 font-bold text-3xl">
          $ {price}
          {unit ?? ""}
        </span>
      </div>
    </Card>
  );
};

export default FoodItem;
