import React, { useState, useRef } from 'react';
import axios from 'axios';

function EmploymentForm() {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        file: '',
    });

    const loadingIcon = (<div role="status">
        <svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
    </div>);

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
        setSuccessMessage(''); // Reset success message
        setErrorMessage('');   // Reset error message
        setIsLoading(true)

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
            const response = await axios.post('/send-employment', data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            console.log('Email sent successfully:', response.data);
            setSuccessMessage('Email sent successfully.');
            setIsLoading(false);
        } catch (error) {
            console.error('Error sending email:', error);
            setErrorMessage('Failed to send email. Please try again.');
            setIsLoading(false);
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
            <div className="flex flex-col items-center justify-center mb-6 w-full ">
                <form onSubmit={handleSubmit} className=" px-8 sm:w-4/5">
                    <div className='flex gap-2 w-full justify-center'>
                        <div className=" mb-6 w-1/2 ">
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
                            type='tel'
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
                            type='text'
                            value={formData.position}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {formErrors.position && <p className="text-red-500 text-xs mt-1">{formErrors.position}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Resume</label>
                        <input
                            id="file_input"
                            name="file"
                            type='file'
                            multiple={false}
                            onChange={handleFileChange}
                            required
                            className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-slate-400 focus:outline-blue-500 focus:outline "
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
                            {isLoading ? loadingIcon : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}


export default EmploymentForm