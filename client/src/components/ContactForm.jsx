import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate form inputs
        if (!formData.name || !formData.email || !formData.message) {
          setFormErrors({
            ...(!formData.name && { name: 'Name is required.' }),
            ...(!formData.email && { email: 'Email is required.' }),
            ...(!formData.message && { message: 'Message is required.' }),
          });
          return;
        }

        try {
          const response = await axios.post('http://localhost:3001/send-message', formData);
          console.log('Email sent successfully:', response.data);
        } catch (error) {
          console.error('Error sending email:', error);
        }
    
        console.log(formData);
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
  return (
    <div className="flex flex-col items-center justify-center  w-full">
                <form onSubmit={handleSubmit} className=" p-8 w-4/5">
                    <div className='flex gap-2 w-full justify-center'>
                        <div className="mb-6 w-full">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                        </div>
                        <div className="mb-6 w-full">
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
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows='4'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
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
  )
}

export default ContactForm