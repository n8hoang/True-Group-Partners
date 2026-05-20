import React, { useState } from 'react';
import axios from 'axios';

function EmploymentForm() {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', position: '', file: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, file: e.target.files[0] }));
        const fileName = e.target.files[0] ? e.target.files[0].name : 'No File Chosen';
        document.getElementById('file-chosen').textContent = fileName;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        setIsLoading(true);
        const data = new FormData();
        Object.entries(formData).forEach(([key, val]) => data.append(key, val));
        try {
            await axios.post('/send-employment', data, { headers: { 'Content-Type': 'multipart/form-data' } });
            setSuccessMessage('Application submitted successfully! We\'ll be in touch soon.');
            setIsLoading(false);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', position: '', file: '' });
            document.getElementById('file-chosen').textContent = 'No File Chosen';
        } catch (error) {
            setErrorMessage('Failed to submit. Please try again or email us directly.');
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="form-label">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="form-input" placeholder="Jane" />
                </div>
                <div>
                    <label className="form-label">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="form-input" placeholder="Smith" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="jane@email.com" />
                </div>
                <div>
                    <label className="form-label">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="(818) 000-0000" />
                </div>
            </div>
            <div>
                <label className="form-label">Position Desired *</label>
                <select name="position" value={formData.position} onChange={handleChange} required className="form-input">
                    <option value="">Select a position...</option>
                    <option>Staff Accountant</option>
                    <option>Senior Accountant</option>
                    <option>Controller</option>
                    <option>CFO / Fractional CFO</option>
                    <option>HR Manager</option>
                    <option>FP&A Analyst</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label className="form-label">Resume *</label>
                <div className="flex items-center gap-3">
                    <label htmlFor="file" className="btn-primary cursor-pointer" style={{ fontSize: '0.85rem', padding: '10px 18px' }}>
                        Choose File
                    </label>
                    <span id="file-chosen" className="text-sm" style={{ color: 'var(--gray-400)' }}>No File Chosen</span>
                </div>
                <input id="file" name="file" type="file" onChange={handleFileChange} required className="hidden" />
            </div>
            {successMessage && <p className="text-sm font-medium" style={{ color: 'var(--teal)' }}>{successMessage}</p>}
            {errorMessage && <p className="text-sm font-medium text-red-500">{errorMessage}</p>}
            <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Application →'}
            </button>
        </form>
    );
}

export default EmploymentForm;
