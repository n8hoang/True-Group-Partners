import React, { useState, useRef } from 'react';
import axios from 'axios';

function EmploymentForm() {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        file: '',
    });

    // Add a new state for form errors
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        // Clear the error message for a particular field when it is being edited
        if (formErrors[name]) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }


    };
    const handleFileChange = (e) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          file: e.target.files[0] // Assuming you're uploading one file
        }));
        console.log(formData.file)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.position || !formData.file) {
            setFormErrors({
                ...(!formData.firstName && { name: 'First Name is required.' }),
                ...(!formData.lastName && { name: 'Last Name is required.' }),
                ...(!formData.email && { email: 'Email is required.' }),
                ...(!formData.phone && { message: 'Phone number is required.' }),
                ...(!formData.position && { name: 'Position desired is required.' }),
                ...(!formData.resume && { name: 'Resume is required.' }),
            });
            return;
        }
        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('position', formData.position);
        data.append('file', formData.file)

        try {
            const response = await axios.post('http://localhost:3001/send-employment', data, 
            { headers: {
                'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Email sent successfully:', response.data);
            setSuccessMessage('Email sent successfully.');
        } catch (error) {
            console.error('Error sending email:', error);
            setErrorMessage('Failed to send email. Please try again.');
        }

        console.log(formData);
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            file: '',
        });
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center  w-full">
                <form onSubmit={handleSubmit} className=" p-8 w-4/5">
                    <div className='flex gap-2 w-full justify-center'>
                        <div className="mb-6 w-1/2 ">
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                            {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
                        </div>
                        <div className="mb-6 w-1/2">
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                            {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">Position Desired</label>
                        <input
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {formErrors.position && <p className="text-red-500 text-xs mt-1">{formErrors.position}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">Resume</label>
                        <input
                            id="file"
                            name="file"
                            type="file"
                            multiple={false}
                            onChange={handleFileChange}
                            required
                            className=" text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                        {formErrors.file && <p className="text-red-500 text-xs mt-1">{formErrors.file}</p>}
                    </div>
                    <div className="flex justify-center">
                        {successMessage && <p className="text-green-500 pb-4">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500 pb-4">{errorMessage}</p>}
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}


export default EmploymentForm