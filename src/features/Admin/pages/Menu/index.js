import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pager from "../../../../components/Pager";
import { STATUS_TYPE } from "../../../../utils/constants";
import Form from "../../components/Form";
import Table from "../../components/Table";
import { addMenu } from "./menu-slide";

const MenuPage = () => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const menuData = useSelector((state) => state.menu.items);
  const status = useSelector((state) => state.menu.status);
  const initForm = {
    menuName: "",
    menuImage: "",
    price: 0,
    menuTypeId: 1,
    ingredients: "",
  };
  const [frmData, setFrmData] = useState(initForm);

  const onEditClickHandle = (e, menu) => {
    const { menuName, menuImage, menuTypeId, price, ingredients } = menu;
    e.preventDefault();
    setIsUpdate(true);
    setFrmData((preState) => {
      return {
        ...preState,
        menuName: menuName,
        menuImage: menuImage,
        menuTypeId: menuTypeId,
        price: +price,
        ingredients: ingredients,
      };
    });
  };
  console.log(frmData);
  const addEditHandle = (e) => {
    e.preventDefault();
    const menu = {
      menuName: "Test",
      price: 123.4,
      menuImage: "/images/burger.png",
      ingredients: "Ahihi, Ahii, Ahii",
      menuTypeId: 1,
    };
    dispatch(addMenu(menu));
  };

  return (
    <Fragment>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Menu
      </h2>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <Form isUpdate={isUpdate} actionSubmit={addEditHandle} initData={frmData} />
      </div>

      {status === STATUS_TYPE.LOADING ? (
        <em>loading...</em>
      ) : (
        <div className="w-full overflow-hidden rounded-lg shadow-xs mt-6 border">
          <div className="w-full overflow-x-auto">
            <Table
              theads={[
                "Tên menu",
                "Giá tiền",
                "Hình ảnh",
                "Thành phần",
                "Actions",
              ]}
              tbodies={menuData}
              actionEdit={onEditClickHandle}
            />
          </div>
          <Pager />
        </div>
      )}
    </Fragment>
  );
};

export default MenuPage;
