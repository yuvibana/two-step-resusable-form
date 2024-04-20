import React from "react";

const CommonButton = ({ ButtonName = "Next" }) => {
    return (
        <button className="p-3 rounded w-full bg-cyan-900 outline-0 text-white">{ButtonName}</button>
    )
}
export default CommonButton;