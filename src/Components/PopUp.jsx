import React, { useState } from 'react';

const PopUp = ({ isOpen, onClose }) => {
  // Prevent background scroll when popup is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Form state and validation error state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Simple validation
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.brand) newErrors.brand = 'Brand is required';
    if (!formData.model) newErrors.model = 'Model is required';
    if (!formData.city) newErrors.city = 'City is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Congratulations! Our team will contact you soon.');
      onClose(); // Close the popup after successful submission
    }
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-popup-overlay" onClick={onClose}>
      <div className="mobile-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-close-btn" onClick={onClose}>X</button>
        <h2 className="mobile-popup-title">Get Personalized Quote</h2>
        <p className="mobile-popup-subtitle">Our experts will assist you personally</p>
        <form className="mobile-popup-form" onSubmit={handleSubmit}>
          <div className="mobile-form-group">
            <label>Your Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="mobile-form-group">
            <label>Your Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="mobile-form-group">
            <label>Phone Number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
          <div className="mobile-form-group">
            <label>Brand*</label>
            <input
              type="text"
              name="brand"
              placeholder="For Eg: Maruti Suzuki"
              value={formData.brand}
              onChange={handleChange}
            />
            {errors.brand && <p className="error-text">{errors.brand}</p>}
          </div>
          <div className="mobile-form-group">
            <label>Model*</label>
            <input
              type="text"
              name="model"
              placeholder="For Eg: Swift ZXI+"
              value={formData.model}
              onChange={handleChange}
            />
            {errors.model && <p className="error-text">{errors.model}</p>}
          </div>
          <div className="mobile-form-group">
            <label>City*</label>
            <input
              type="text"
              name="city"
              placeholder="For Eg: Jaipur"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error-text">{errors.city}</p>}
          </div>
          <div className="mobile-form-actions">
            <button
              type="submit"
              className="mobile-enquire-btn"
            >
              Enquire Now
            </button>
            <button
              type="button"
              className="mobile-close-btn-alt"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
