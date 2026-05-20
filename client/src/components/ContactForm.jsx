import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    stage: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const loadingIcon = (
    <div role="status">
      <svg aria-hidden="true" className="inline w-5 h-5 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
    </div>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setFormErrors({
        ...(!formData.name && { name: 'Name is required.' }),
        ...(!formData.email && { email: 'Email is required.' }),
        ...(!formData.message && { message: 'Message is required.' }),
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('/send-message', formData);
      console.log('Email sent successfully:', response.data);
      setSuccessMessage('Message sent! We\'ll be in touch within one business day.');
      setIsLoading(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', stage: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Failed to send message. Please try again or email us directly.');
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="form-label">Full Name *</label>
            <input
              type="text" id="name" name="name"
              value={formData.name} onChange={handleChange} required
              placeholder="Jane Smith"
              className="form-input"
            />
            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
          </div>
          <div>
            <label className="form-label">Email Address *</label>
            <input
              type="email" id="email" name="email"
              value={formData.email} onChange={handleChange} required
              placeholder="jane@company.com"
              className="form-input"
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>
        </div>

        {/* Row 2: Company + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="form-label">Company Name</label>
            <input
              type="text" id="company" name="company"
              value={formData.company} onChange={handleChange}
              placeholder="Acme Inc."
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Phone Number</label>
            <input
              type="tel" id="phone" name="phone"
              value={formData.phone} onChange={handleChange}
              placeholder="(818) 000-0000"
              className="form-input"
            />
          </div>
        </div>

        {/* Row 3: Service + Stage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="form-label">Service Interested In</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-input">
              <option value="">Select a service...</option>
              <option>CFO & Strategic Finance</option>
              <option>Accounting Operations</option>
              <option>Startup & Transaction Support</option>
              <option>Tax Services</option>
              <option>HR & Payroll</option>
              <option>Multiple Services</option>
            </select>
          </div>
          <div>
            <label className="form-label">Company Stage</label>
            <select id="stage" name="stage" value={formData.stage} onChange={handleChange} className="form-input">
              <option value="">Select a stage...</option>
              <option>Pre-Seed</option>
              <option>Seed</option>
              <option>Series A</option>
              <option>Series B</option>
              <option>Series C+</option>
              <option>Growth / Profitable</option>
              <option>Pre-IPO / Public</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="form-label">Message *</label>
          <textarea
            id="message" name="message" rows="4"
            value={formData.message} onChange={handleChange} required
            placeholder="Tell us about your company and what you're looking for..."
            className="form-input"
          />
          {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
        </div>

        {/* Status messages */}
        {successMessage && (
          <div className="p-4 rounded-lg text-sm font-medium" style={{ background: 'var(--teal-pale)', color: 'var(--teal)' }}>
            ✓ {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 rounded-lg text-sm font-medium bg-red-50 text-red-600">
            {errorMessage}
          </div>
        )}

        <button type="submit" className="btn-primary w-full justify-center" disabled={isLoading}>
          {isLoading ? loadingIcon : 'Send Message →'}
        </button>

      </form>
    </div>
  );
}

export default ContactForm;
