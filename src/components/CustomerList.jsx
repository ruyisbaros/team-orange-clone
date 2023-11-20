import React from "react";
import { references } from "../utils/helpers";
import ModalCard from "./ModalCard";

const CustomerList = ({ setSelected }) => {
  return (
    <div className="w-full mt-[5rem]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {references.map((item) => (
          <ModalCard key={item.id} item={item} setSelected={setSelected} />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
