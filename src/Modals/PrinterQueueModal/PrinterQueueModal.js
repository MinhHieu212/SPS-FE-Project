import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { InfoField2, InfoFieldStatus } from "../../Utils/InfoField";
import { PrintingQueueLogsSkeleton } from "../../Utils/Skeleton";
import { convertTime } from "../../Utils/Time";
const PrinterQueueModal = ({ children, queue }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            YÊU CẦU IN ẤN HIỆN TẠI
          </div>
          <div className="w-full h-[400px] flex justify-start py-2 gap-2 items-center flex-col text-[16px] md:text-[20px] overflow-y-scroll">
            {queue?.map((request, index) => {
              return (
                <>
                  {request.mssv !== "" ? (
                    <div
                      className="w-[90%] rounded-md bg-[#ffffff] p-2 shadow-md border-[1px] border-[#367FA9]"
                      key={index}
                    >
                      <InfoField2
                        fieldName={"Thời gian"}
                        fieldValue={
                          new Date(convertTime(request?.createdAt))
                            .toISOString()
                            .slice(0, 10) +
                            " " +
                            new Date(convertTime(request?.createdAt))
                              .toISOString()
                              .slice(11, 19) || "..."
                        }
                      ></InfoField2>
                      <InfoField2
                        fieldName={"Tên sinh viên"}
                        fieldValue={
                          (request?.lastName || "...") +
                          " " +
                          (request?.firstName || "...")
                        }
                      ></InfoField2>
                      <InfoField2
                        fieldName={"Mã sinh viên"}
                        fieldValue={request?.mssv || "..."}
                      ></InfoField2>
                      <InfoField2
                        fieldName={"Tên file in"}
                        fieldValue={request?.document?.title || "..."}
                      ></InfoField2>
                      <InfoField2
                        fieldName={"Số bản in"}
                        fieldValue={request?.numVersion || "..."}
                      ></InfoField2>
                      <InfoFieldStatus
                        fieldName={"Trạng thái"}
                        fieldValue={request?.status || "..."}
                      ></InfoFieldStatus>
                    </div>
                  ) : (
                    <PrintingQueueLogsSkeleton></PrintingQueueLogsSkeleton>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default PrinterQueueModal;
