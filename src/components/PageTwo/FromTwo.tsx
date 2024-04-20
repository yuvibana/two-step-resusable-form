import React from "react";
import FormComponent from '../FormComponent'

function FromOne() {

    const familyFields = [
        { id: '1', type: 'text', name: 'mother', placeholder: `Enter Mother's Name` },
        { id: '2', type: 'text', name: 'father', placeholder: `Enter Father's Name` }
    ]

    const messages = {
        mother: '',
        father: '',
    }

    return (
        <FormComponent
            FormHeading="Enter Your Personal Details !"
            fields={familyFields}
            errorMessages={messages}
            Redirect={'/'}
        />

    )
}

export default FromOne;