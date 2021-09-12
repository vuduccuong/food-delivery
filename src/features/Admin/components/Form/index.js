import React from "react";
import { useSelector } from "react-redux";
import FormInput from "../../../../components/Input";
import FormArea from "../../../../components/Input/input-area";
import FormSelect from "../../../../components/Input/input-select";

const Form = (props) => {
    const {isUpdate, actionSubmit, initData} = props;
    const { menuName, menuImage, menuTypeId, price, ingredients } = initData;
    const menuType = useSelector(state=> state.menu.menuType);
  return (
    <form onSubmit={(e) => actionSubmit(e)}>
      <div className="flex items-center">
        <FormInput title="Tên menu" valueInit={menuName} />
        <FormInput title="Hình ảnh sản phẩm" extendClass="ml-4" valueInit={menuImage} />
      </div>
      <div className="flex items-center mt-4">
        <FormInput title="Giá tiền" placeholder="$ 3.00" valueInit={price} />
        <FormSelect title="Phân loại" dataOptions={menuType} valueInit={menuTypeId} />
      </div>
      <FormArea title="Thành phần" row={3} placeholder="Nguyên liệu" valueInit={ingredients} />
      <div className="mt-4 flex flex-row justify-end">
        <button
          className={`px-7 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple`}
        >
          {isUpdate ? "Cập nhật" : "Thêm mới"}
        </button>
      </div>
    </form>
  );
};

export default Form;
