import React, { useState } from "react";
import CommonHeading from "./CommonHeading";
import { useNavigate } from "react-router-dom";
import CommonInput from "./CommonInput";
import CommonButton from "./CommonButton";

function FormComponent({ fields, Redirect, FormHeading, errorMessages }) {
    const Navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        let newErrors = {};

        fields.forEach(field => {
            const fieldName = field.name;
            console.log(field.name);

            if (!formData.get(fieldName)) newErrors[fieldName] = errorMessages[fieldName] || `${fieldName} Name is required`
        });

        setErrors(newErrors);

        const hasErrors = Object.keys(newErrors).length > 0;
        if (!hasErrors) {
            const formValues = {};
            fields.forEach(field => formValues[field.name] = formData.get(field.name));
            localStorage.setItem('FormOneData', JSON.stringify(formValues));
            Navigate(Redirect);
        }
    };

    return (
        <>
            <CommonHeading Heading={FormHeading} />
            <form onSubmit={handleSubmit}>
                {fields.map((field) => {
                    return (
                        <div className="inputBox mb-5" key={field.id}>
                            <CommonInput
                                InputId={field.id}
                                InputPlaceholder={field.placeholder}
                                InputName={field.name}
                                InputType={field.type}
                            />
                            {errors[field.name] && <span className="text-red-600 block mt-2 capitalize">{errors[field.name]}</span>}
                        </div>
                    )
                })}
                <CommonButton />
            </form>
        </>
    )
}
export default FormComponent;