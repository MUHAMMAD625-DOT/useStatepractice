import React, { useState } from "react";

function ComponentB() {
  const [name, setName] = useState({
    name: "sajid",
    age: 25,
    address: "sgd",
    class: "FA IT",
    college: "govt.",
  });
  let changeName = () => {
    setName({
      name: "Mateen",
      age: 20,
      address: "kotmomin",
      class: "FSC BIOLOGY",
      college: "Superior group of colleges",
    });
  };
  console.log(name);

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-5">
      <div className=" flex items-center gap-4 mt-4">
        <p className="text-xl font-bold text-gray-700">{name.name}</p>
        <p className="text-xl font-bold  text-gray-700">{name.age}</p>
        <p className="text-xl font-bold  text-gray-700">{name.address}</p>
        <p className="text-xl font-bold text-gray-700 ">{name.class}</p>
        <p className="text-xl font-bold text-gray-700 ">{name.college}</p>
      </div>
      <div>
        <button
          className="text-xl font-bold  border rounded-md bg-slate-50 p-1 "
          onClick={changeName}
        >
          change
        </button>
      </div>
    </div>
  );
}

export default ComponentB;
