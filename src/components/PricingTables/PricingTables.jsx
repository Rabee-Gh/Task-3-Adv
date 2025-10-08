import React from 'react';
import './PricingTables.css'; // سنقوم بإنشاء هذا الملف لاحقًا

const PricingTables = () => {
  const programsData = [
    { name: 'Nursery', age: '2 - 3 Years', tuition: '$1,686', registration: '$162', activity: '$12' },
    { name: 'Pre - Kindergartens', age: '3 - 4 Years', tuition: '$2,686', registration: '$220', activity: '$16' },
    { name: 'Kindergarten', age: '4 - 5 Years', tuition: '$3,686', registration: '$340', activity: '$20' },
  ];

  const additionalServicesData = [
    { service: 'Before and After-School Care', price: '$120 / per month' },
    { service: 'Language Immersion Program', price: '$60 / per semester' },
    { service: 'Transportation (optional)', price: '$80 / per month' },
  ];

  return (
    <div className="pricing-section">
      {/* الجدول الأول: البرامج */}
      <div className="pricing-table-container">
        <div className="pricing-table programs-table">
          <div className="table-header-row">
            <div className="table-header-cell">Program</div>
            <div className="table-header-cell">Age Group</div>
            <div className="table-header-cell">Annual Tuition</div>
            <div className="table-header-cell">Registration Fee</div>
            <div className="table-header-cell">Activity Fee</div>
          </div>
          {programsData.map((program, index) => (
            <div className="table-data-row" key={index}>
              <div className="table-data-cell">{program.name}</div>
              <div className="table-data-cell">{program.age}</div>
              <div className="table-data-cell">{program.tuition}</div>
              <div className="table-data-cell">{program.registration}</div>
              <div className="table-data-cell">{program.activity}</div>
            </div>
          ))}
        </div>
      </div>

      {/* الجدول الثاني: الخدمات الإضافية */}
      <div className="pricing-table-container additional-services-container">
        <div className="additional-services-title">
          Additional Services
        </div>
        <div className="pricing-table services-table">
          {additionalServicesData.map((service, index) => (
            <div className="table-data-row service-row" key={index}>
              <div className="table-data-cell service-name-cell">{service.service}</div>
              <div className="table-data-cell service-price-cell">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTables;