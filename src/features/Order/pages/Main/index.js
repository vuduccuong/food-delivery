import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Overlay from "../../../../components/Overlay";
import ShopingCart from "../../../ShopingCart/pages/Main";
import FoodList from "../../components/Food/food-list";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import TitlePage from "../../components/TitlePage";
import { loadOrder } from "../../order-slice";
import Detail from "../Detail";

const MainPage = () => {
  const foods = useSelector((state) => state.order.foods);
  const { title, image } = useSelector((state) => state.order.titleInfo);
  const isOpendCart = useSelector((state) => state.cart.isOpendCart);
  const [showDetail, setShowDetail] = useState(false);
  const [foodDetail, setFoodDetail] = useState({});
  if (isOpendCart || showDetail) {
    document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
  } else {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-hidden");
  }
  const dispatch = useDispatch();
  const param = useParams();
  dispatch(loadOrder(param?.menuType));

  const onViewDetailHandle = (food) => {
    setFoodDetail(food);
    setShowDetail(true);
  };

  const onCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className={`text-gray-900 bg-gray-100 font-body h-full`}>
      <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
        {(isOpendCart || showDetail) && <Overlay />}
        <NavBar />
        <main className="lg:col-span-4">
          <Header />
          <div className="mt-16">
            <TitlePage image={image}>Ninja {title}</TitlePage>
            <div className="mt-5 grid lg:grid-cols-3 sm:grid-cols-2 gap-16">
              <FoodList foods={foods} onViewDetail={onViewDetailHandle} />
            </div>
          </div>
        </main>
        {isOpendCart && <ShopingCart />}
        {showDetail && <Detail food={foodDetail} closeHandle={onCloseDetail} />}
      </div>
    </div>
  );
};

export default MainPage;
