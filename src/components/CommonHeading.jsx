import React from "react";

const CommonHeading = ({ Heading = "Enter Your Personal Details !" }) => {
    return (
        <h1 className="p-3 text-3xl text-center text-white mb-3">{Heading}</h1>
    )
}
export default CommonHeading;