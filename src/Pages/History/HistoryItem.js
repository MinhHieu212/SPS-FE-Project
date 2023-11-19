import React from "react";
import "./History.scss";
import { CancelIcon, InfoIcon } from "../../Assets/Icons/Icons";
import { CancelPrintingModal, DetailHistoryModal } from "../../Modals";

function HistoryItem(props) {
  return (
    <div className=" flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-semibold py-3 px-4 mt-2 min-w-[800px] md:w-full max-h-[60px] border-b-2 border-black rounded-sm ">
      <div className="truncate overflow-clip w-[25%] ">{props.fileName}</div>
      <div className="text-center w-[15%]">{props.printerId}</div>
      <div className="text-center w-[15%]">{props.position}</div>
      <div className="text-center w-[15%]">{props.date}</div>
      <div className="text-center w-[15%]">{props.status}</div>
      <div className="flex flex-row gap-4 items-center justify-center w-[15%]">
        <DetailHistoryModal>
          <InfoIcon />
        </DetailHistoryModal>
        {props.status === "Đang đợi" ? (
          <CancelPrintingModal>
            <CancelIcon />
          </CancelPrintingModal>
        ) : (
          <div className="w-[20px]"></div>
        )}
      </div>
    </div>
  );
}
export default HistoryItem;