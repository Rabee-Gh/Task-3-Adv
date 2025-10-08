import React, { useState } from 'react';
import './Questions.css';

const Questions = () => {
  const faqData = [
    {
      id: 1,
      question: 'What are the school hours at Little Learners Academy?',
      answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.',
      isOpen: true, 
    },
    {
      id: 2,
      question: 'Is there a uniform policy for students?',
      answer: 'Yes, Little Learners Academy has a simple and comfortable uniform policy for all students. Details about the uniform can be found in the parent handbook.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'What extracurricular activities are available for students?',
      answer: 'We offer a variety of engaging extracurricular activities, including art club, music lessons, sports teams, and coding classes. The schedule varies throughout the year.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'How do you handle food allergies and dietary restrictions?',
      answer: 'The safety of our students is paramount. We have strict protocols for managing food allergies and dietary restrictions. Parents are required to provide detailed information, and our staff is trained to handle these situations carefully.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'What is the teacher-to-student ratio at Little Learners Academy?',
      answer: 'We pride ourselves on maintaining a low teacher-to-student ratio to ensure personalized attention for each child. Our average ratio is 1:10 in our early childhood classes.',
      isOpen: false,
    },
    {
      id: 6,
      question: 'How do you handle discipline and behavior management?',
      answer: 'Our approach to discipline is positive and focuses on teaching self-regulation and respect. We have clear guidelines and work closely with parents to address any behavioral concerns.',
      isOpen: false,
    },
    {
      id: 7,
      question: 'How do I apply for admission to Little Learners Academy?',
      answer: 'The admission process involves submitting an application form, attending a school tour, and a brief meeting with our admissions team. You can find the application form and more details on our admissions page.',
      isOpen: false,
    },
  ];

  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (id) => {
    setFaqs(faqs.map(faq =>
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  return (
    <div className="faq-section" id='Admissions'>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className={`faq-item ${faq.isOpen ? 'open' : ''}`}>
            <div className="faq-question-container" onClick={() => toggleFAQ(faq.id)}>
              <h3 className="faq-question">{faq.question}</h3>
              <button className="faq-toggle-button">
                {faq.isOpen ? '-' : '+'}
              </button>
            </div>
            {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

