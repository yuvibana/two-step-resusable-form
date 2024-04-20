import React, { } from "react";
import FormComponent from '../FormComponent'

function FormOne() {


    const userFields = [
        { id: '1', placeholder: 'Enter Your First Name', name: 'name', type: 'text' },
        { id: '2', placeholder: 'Enter Your Last Name', name: 'lname', type: 'text' },
        { id: '3', placeholder: 'Enter Your Email', name: 'email', type: 'email' },
        { id: '4', placeholder: 'Enter Your Address', name: 'address', type: 'text' },
    ];

    let messages = {
        name: 'Name is required',
        lname: 'Last Name is required',
        email: 'Email is required',
        address: 'Address is required',
    };

    return (
        <>
            <FormComponent
                FormHeading="Enter Your Personal Details !"
                fields={userFields}
                errorMessages={messages}
                Redirect={'/NextPage'}
            />
        </>
    )
}
export default FormOne;

