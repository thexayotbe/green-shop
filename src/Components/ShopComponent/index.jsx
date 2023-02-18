import React, { useEffect, useState } from "react";
import ShopCard from "../Generic/ShopCard";
import data from "../../utils/MOCK_DATA.js";
import { Pagination } from "antd";
export const ShopComponent = () => {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(9);
  // useEffect(() => {
  //   setEndPage(startPage + 8);
  //   console.log(startPage, endPage);
  // }, [startPage]);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px  " }}>
        {data.map((value) => {
          return (
            value.id >= startPage &&
            value.id <= endPage && (
              <ShopCard
                key={value.id}
                img={value.img}
                title={value.name}
                price={value.price}
                id={value.id}
              />
            )
          );
        })}
      </div>
      <Pagination
        showSizeChanger={false}
        defaultCurrent={1}
        total={data.length + 1}
        onChange={(page) => {
          if (page === 1) {
            setStartPage(1);
            setEndPage(9);
            return;
          }
          setStartPage(page * 9);
          setEndPage(page * 9 + 8);
        }}
      />
    </>
  );
};
