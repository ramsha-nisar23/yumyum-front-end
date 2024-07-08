import React from 'react';
import './termsandconditions.scss';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <header className="header">
        <div className="logo">Logo YumYum</div>
      </header>
      <div className="hero-image">
        <h1 className="title">Terms & Conditions</h1>
      </div>
      <div className="content">
        <h2>Terms & Conditions</h2>
        <p>Dear Customer!</p>
        <p>
          At Yum Yum, we are committed to safeguarding your privacy and ensuring the security of your personal information.
          When you use our app, we may collect data such as your name, contact details, transaction history, and device information
          to provide and improve our services, customize your experience, and communicate with you effectively. We may share this
          information with trusted third parties for purposes such as order fulfillment and analytics. Rest assured, we employ
          industry-standard security measures to protect your data from unauthorized access and misuse. You have control over your
          information and can manage your preferences through your account settings. We do not knowingly collect personal
          information from individuals under the age of 13. By using Yum Yum, you consent to the collection, use, and sharing of your
          information as outlined in this Privacy Policy. If you have any questions or concerns, please reach out to us at
          contact@yumyumapp.com.
        </p>
        <div className="signature">
          <div>Logo YumYum</div>
          <div>Delivery Hero</div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
