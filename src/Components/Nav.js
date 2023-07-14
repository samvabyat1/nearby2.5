import React from "react";
import Logo from "../favicon.ico";

export default function Nav() {
  return (
    <div className="flex px-5 py-2">
      <div className="img">
        <img className="border-dashed border-2 border-white rounded-3xl h-8 mr-2 hover:border-solid" src={Logo} alt="" />
      </div>
      <div className="left flex-1 text-lg font-bold py-0.5">
      <h3>Nearby <span className="text-amber-200">2.5</span></h3>
      </div>
      <div className="right">
        <div className="bg-gray-900 px-6 py-2 rounded-2xl text-xs cursor-pointer hover:text-yellow-500">
          <p>View us</p>
        </div>
      </div>
    </div>
  );
}
