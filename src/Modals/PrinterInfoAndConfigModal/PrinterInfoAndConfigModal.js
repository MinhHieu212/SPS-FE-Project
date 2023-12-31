import React, { useEffect, useState } from "react";
import InfoField from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";
import { editPtr } from "../../APIs/StaffAPI/StaffAPI";
import { toast } from "../../Utils/Toastify";
import ReactSwitch from "react-switch";

export const newPtr = {};
const PrinterInfoAndConfigModal = ({
  children,
  id,
  brand,
  model,
  description,
  status,
  fileType,
  setRenderList,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    newPtr.status = checked === "enable" ? 1 : 0;
    newPtr.printerId = id;

    try {
      const handleEditAPI = async (newData) => {
        const request = await editPtr(newData);
        setRenderList();
      };
      handleEditAPI(newPtr);
      setOpenModal(false);
      toast.success("Tùy chỉnh thông tin máy tin thành công");
    } catch (error) {
      toast.error("Tùy chỉnh thông tin máy tin thất bại");
    }
  };
  const [checked, setChecked] = useState(
    status === "Hoạt động" ? "enable" : "disable"
  );
  const toggleState = (curr) => {
    setChecked((curr) => (curr === "enable" ? "disable" : "enable"));
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[20rem] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            CẤU HÌNH CỦA MÁY IN VÀ TÙY CHỈNH
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold  ">
            <div className="flex w-full">
              <div className="w-[60%] p-3 md:p-4">
                <p className="font-semibold text-[20] md:text-[24px] pb-2">
                  Thông tin máy in
                </p>
                <InfoField fieldName={"ID máy in"} fieldValue={id}></InfoField>
                <InfoField
                  fieldName={"Nhãn hiệu"}
                  fieldValue={brand}
                ></InfoField>
                <InfoField fieldName={"Mẫu máy"} fieldValue={model}></InfoField>
                <InfoField
                  fieldName={"Mô tả"}
                  fieldValue={description}
                ></InfoField>
              </div>
              <div className="w-[40%]  p-3 md:p-4">
                <p className="font-semibold text-[20] md:text-[24px] pb-2">
                  Loại file được in
                </p>
                <div className="w-full h-[200px] flex flex-col items-center justify-start overflow-y-scroll rounded-md border-[1px] border-[#367FA9]">
                  {fileType?.map((type, index) => {
                    return (
                      <div
                        className="p-2 bg-[#e9e9e9] rounded-sm text-center w-[90%] h-[50px] mt-2 border-[1px] border-[#367FA9]"
                        key={index}
                      >
                        {type}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between  items-center mb-2 ml-4">
            <div className="flex flex-col justify-start  w-1/2 md:w-1/3 gap-2 md:gap-3">
              <p className="text-[#066DCC] w-full flex text-[16px] md:text-[20px] font-bold mb-[8px]">
                Trạng thái máy in:{" "}
              </p>
              <div className="flex justify-start">
                {checked === "enable" ? (
                  <p className="text-[#066DCC] flex text-[16px] md:text-[20px] font-bold w-full mb-[8px]">
                    Hoạt động{" "}
                  </p>
                ) : (
                  <p className="text-red-500 flex italic text-[16px] md:text-[20px] font-bold w-full mb-[8px]">
                    Vô hiệu hóa{" "}
                  </p>
                )}

                <div className="switch flex gap-8">
                  <ReactSwitch
                    onChange={toggleState}
                    checked={checked === "enable"}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-end pr-5">
              <button
                onClick={handleClick}
                className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500 hover:bg-blue-300 h-[50px] p-3 w-[80%] md:w-[70%]  rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default PrinterInfoAndConfigModal;
