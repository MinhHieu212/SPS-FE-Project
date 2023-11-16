import React, { useEffect, useState } from "react";

const FilterReportModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("latest");
  const [monthChecked, setMonthChecked] = useState("All");
  const [yearChecked, setYearChecked] = useState("2023");
  const cancelFilter = () => {
    setSort("latest");
    setMonthChecked("All");
    setYearChecked("2023");
    setOpen(false);
  };

  const applyFilter = () => {
    console.log("Params Filter Printer : ", {
      sort: sort,
      month: monthChecked,
      year: yearChecked,
    });
    setOpen(false);
  };
  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      fontSize: "16px", // Change the font size of the placeholder text
      fontWeight: "bold", // Change the font weight of the placeholder text
      color: "black", // Change the color of the placeholder text
      // You can add more styles here as needed
    }),
  };
  const handleMonth = (e) => {
    setMonthChecked(e.target.value);
  };
  const handleYear = (e) => {
    setYearChecked(e.target.value);
  };
  return (
    <div className="Wrapper relative z-10 w-full">
      <div className="Trigger" onClick={() => setOpen(!open)}>
        {children}
      </div>
      {open && (
        <div className="content absolute z-10 top-[140%] md:right-0 right-[50%] translate-x-0 md:translate-x-0 h-[auto] p-3 bg-[#E6E6E6] rounded-lg w-[300px] md:w-[570px] text-[15px] md:text-[18px] shadow-md border-[1px] border-[#367FA9]  ">
          <div className="absolute w-[20px] h-[20px] rotate-45 bg-[#E6E6E6] border-l-[1px] border-t-[1px] border-[#367FA9] top-[-11px] z-0 right-[15px] "></div>
          <div className="flex-col flex md:flex-row items-start justify-center gap-3 mb-3  ">
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
              <div className="text-[#1488DB] uppercase border-b-[3px] text-[18px]  border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Báo cáo theo
              </div>
              <select
                className="border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%] text-center"
                onClick={handleYear}
              >
                <option value="2020">Năm 2020</option>
                <option value="2021">Năm 2021</option>
                <option value="2022">Năm 2022</option>
                <option value="2023" selected>
                  Năm 2023
                </option>
              </select>
              <select
                className="border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%] text-center"
                onClick={handleMonth}
              >
                <option value="All selected">Tất cả tháng</option>
                <option value="1">Tháng 1</option>
                <option value="2">Tháng 2</option>
                <option value="3">Tháng 3</option>
                <option value="4">Tháng 4</option>
                <option value="5">Tháng 5</option>
                <option value="6">Tháng 6</option>
                <option value="7">Tháng 7</option>
                <option value="8">Tháng 8</option>
                <option value="9">Tháng 9</option>
                <option value="10">Tháng 10</option>
                <option value="11">Tháng 11</option>
                <option value="12">Tháng 12</option>
              </select>
            </div>
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
              <div className="text-[#1488DB]  uppercase text-[18px]  border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Sắp xếp
              </div>
              <div
                className={`${
                  sort === "latest" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSort("latest")}
              >
                Thời gian gần dần
              </div>
              <div
                className={`${
                  sort === "oldest" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSort("oldest")}
              >
                Thời gian xa dần
              </div>
            </div>
          </div>
          <div className=" w-[100%] mx-auto  md:h-[50px] rounded-lg flex items-end justify-end gap-3">
            <button
              className="bg-[#a1a1a1] shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px]  w-[35%] md:w-[20%] block rounded-md text-[15px] md:text-[18px] font-semibold text-white"
              onClick={cancelFilter}
            >
              Hủy
            </button>
            <button
              className="bg-blue-400 shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[35%] md:w-[20%] block rounded-md text-[15px] md:text-[18px] font-semibold text-white"
              onClick={applyFilter}
            >
              Áp dụng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterReportModal;
