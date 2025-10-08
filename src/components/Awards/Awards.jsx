import React, { useState } from 'react';
import BenefitsCard from '../BenefitsCard/BenefitsCard'; 
import './Awards.css'; 

const Awards = () => {
  const awards  = [
    {
      bnfimg: '/assets/images/award1.png',
      bnfti: 'Outstanding Early Childhood Education Award',
      bnfpar: 'Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy’s commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.',
    },
    {
      bnfimg: '/assets/images/award2.png',
      bnfti: 'Innovative STEAM Education Award',
      bnfpar: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.',
    },
    {
      bnfimg: '/assets/images/award3.png',
      bnfti: 'Environmental Stewardship Award',
      bnfpar: 'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.',
    },
    {
      bnfimg: '/assets/images/award2.png',
      bnfti: 'Innovative STEAM Education Award',
      bnfpar: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.',
    },
    {
        bnfimg: '/assets/images/award1.png',
        bnfti: 'Environmental Stewardship Award',
        bnfpar: 'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.',
    },
    {
      bnfimg: '/assets/images/award3.png',
      bnfti: 'Environmental Stewardship Award',
      bnfpar: 'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.',
    },
    {
        bnfimg: '/assets/images/award2.png',
        bnfti: 'Gomming Soooooon',
        bnfpar: 'We working on it , It will be amazing',
    },
  
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : awards.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex < awards.length - 1 ? nextIndex + 1 : 0
    );
  };

  const visibleAwards = awards.slice(currentIndex, currentIndex + 3); 

  const hasMoreAwards = awards.length > 3;

  return (
    <div className="awards-container">
      <div className="awards-slider">
        {visibleAwards.map((award, index) => (
          <BenefitsCard
            key={index}
            bnfimg={award.bnfimg}
            bnfti={award.bnfti}
            bnfpar={award.bnfpar}
          />
        ))}
      </div>
      {hasMoreAwards && (
        <div className="awards-navigation">
          {awards.length > 3 && <p className="more-awards">{(awards.length - visibleAwards.length > 0) ? `${awards.length - visibleAwards.length} More Awards` : ''}</p>}
          <div style={{textWrap:"nowrap"}}>
            <button onClick={goToPrevious} className="arrow-button left-arrow">
            ←
          </button>
          <button onClick={goToNext} className="arrow-button right-arrow">
            →
          </button></div>
        </div>
      )}
    </div>
  );
};

export default Awards;








// 
