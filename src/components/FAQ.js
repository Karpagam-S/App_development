import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    { question: 'How do I register a new property?', answer: 'To register a new property, go to the property management section and click on "Add New Property". Fill out the required details and submit.' },
    { question: 'How can I update property details?', answer: 'To update property details, select the property from your list and click on "Edit". Make the necessary changes and save.' },
    { question: 'What should I do if I forget my password?', answer: 'Click on "Forgot Password" on the login page and follow the instructions to reset your password.' },
    { question: 'How can I contact support?', answer: 'You can contact support by going to the "Help" section and using the contact form or live chat feature.' },
    { question: 'Can I schedule property viewings online?', answer: 'Yes, you can schedule property viewings online through the "Schedule a Viewing" option on the property listing page.' },
    { question: 'How do I change my account information?', answer: 'To change your account information, go to "My Account" and select "Edit Profile". Update your details and save the changes.' },
    { question: 'What payment methods are accepted?', answer: 'We accept major credit cards, debit cards, and bank transfers. Payment details can be managed in the "Billing" section.' },
    // { question: 'How can I delete my account?', answer: 'To delete your account, please contact our support team through the "Help" section. They will guide you through the process.' },
    { question: 'Can I list multiple properties under one account?', answer: 'Yes, you can list multiple properties under one account. Simply add each property through the property management section.' },
    { question: 'Is there a fee for listing properties?', answer: 'There is a nominal fee for listing properties. Details about the fee structure can be found in the "Pricing" section.' },
    { question: 'How do I manage tenant applications?', answer: 'Tenant applications can be managed through the "Tenant Management" section where you can review, approve, or decline applications.' },
    // { question: 'What should I do if I encounter a technical issue?', answer: 'If you encounter a technical issue, please report it through the "Support" section or contact our support team for assistance.' },
    { question: 'Can I customize my property listings?', answer: 'Yes, you can customize your property listings by adding descriptions, images, and special features to highlight the properties.' },
  ];

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
     <h2> <b>Frequently Asked Questions</b></h2>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="faq-list">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h5>{faq.question}</h5>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
