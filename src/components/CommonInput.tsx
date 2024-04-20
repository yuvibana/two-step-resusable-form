
import React, { FC } from "react";

type InputProps = {
    InputId?: string;
    InputName: string;
    InputPlaceholder: string;
    InputType?: string;
    InputError?: string
}

const CommonInput: FC<InputProps> = ({
    InputId,
    InputName = "name",
    InputPlaceholder = "Enter Name",
    InputType = "text",
    InputError
}) => {
    return (
        <input
            className="w-full p-3 rounded outline-0"
            id={InputId}
            placeholder={InputPlaceholder}
            name={InputName}
            type={InputType}
        />
    );
}

export default CommonInput;
