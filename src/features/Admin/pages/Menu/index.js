import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pager from "../../../../components/Pager";
import { STATUS_TYPE } from "../../../../utils/constants";
import Form from "../../components/Form";
import Table from "../../components/Table";
import { addMenu, onDeleteMenu } from "./menu-slide";

const MenuPage = () => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const menuData = useSelector((state) => state.menu.items);
  const status = useSelector((state) => state.menu.status);

  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const typeInputRef = useRef();
  const priceInputRef = useRef();
  const ingredientsInputRef = useRef();

  const [frmData, setFrmData] = useState({});

  const onEditClickHandle = (e, menu) => {
    const { menuName, menuImage, menuTypeId, price, ingredients } = menu;
    e.preventDefault();
    setIsUpdate(true);
    setFrmData(menu);

    nameInputRef.current.value = menuName;
    imageInputRef.current.value = menuImage;
    typeInputRef.current.value = menuTypeId;
    priceInputRef.current.value = price;
    ingredientsInputRef.current.value = ingredients;
  };

  const addEditHandle = (e) => {
    e.preventDefault();
    const menu = {
      ...frmData,
      menuName: nameInputRef.current.value,
      price: priceInputRef.current.value,
      menuImage: imageInputRef.current.value,
      ingredients: ingredientsInputRef.current.value,
      menuTypeId: typeInputRef.current.value,
    };
    dispatch(addMenu(menu));
  };

  const onDeleteClickHandle = (id) => {
    dispatch(onDeleteMenu(id));
  };

  return (
    <Fragment>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Menu
      </h2>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <Form
          isUpdate={isUpdate}
          actionSubmit={addEditHandle}
          menuName={nameInputRef}
          menuImage={imageInputRef}
          price={priceInputRef}
          menuTypeId={typeInputRef}
          ingredients={ingredientsInputRef}
        />
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
              actionDelete={onDeleteClickHandle}
            />
          </div>
          <Pager total={menuData.length} />
        </div>
      )}
    </Fragment>
  );
};

export default MenuPage;
