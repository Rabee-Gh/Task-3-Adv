import React, { useState } from 'react';
import './Slider.css';
const Slider = () => {
  const testimonials = [
    {
      id: 1,
      img: "/assets/images/ProfileContainer.png",
      author: "Jennifer B",
      content: "Unit: Learners Academy has been a second home for my child. I've caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
      id: 2,
      img: "/assets/images/ProfileContainer(1).png",
      author: "David K",
      content: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
      id: 3,
      img: "/assets/images/ProfileContainer(2).png",
      author: "Emily L",
      content: "My son is social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    },
    {
      id: 4,
      img: "/assets/images/ProfileContainer.png",
      author: "Michael S",
      content: "The personalized attention at Little Learners Academy is outstanding. My child's confidence has soared!"
    },
    {
      id: 5,
      img: "/assets/images/ProfileContainer(1).png",
      author: "Jessica P",
      content: "I highly recommend Little Learners Academy. The teachers are passionate and create a wonderful learning atmosphere."
    },
    {
      id: 6,
      img: "/assets/images/ProfileContainer(2).png",
      author: "Kevin M",
      content: "Little Learners Academy has exceeded our expectations. The curriculum is engaging and the staff truly cares about the children."
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const goToPrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setStartIndex(prev => Math.min(testimonials.length - itemsToShow, prev + 1));
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsToShow);
  const hasPrev = startIndex > 0;
  const hasNext = startIndex < testimonials.length - itemsToShow;

  return (
    <div className="big" id='Academics'>
      <div className="slider-container">
      <div className="slider-wrapper">
        {visibleTestimonials.map(testimonial => (
          <div
            key={testimonial.id}
            className="testimonial"
          >
            <img src={testimonial.img} alt={testimonial.author} className='char'/>
            <h1 className="author">{testimonial.author}</h1>
            <img src="/assets/images/stars.png" alt="any" className='star' />
            <p className="content">{testimonial.content}</p>
          </div>
        ))}
      </div>

     
    </div>


        <button onClick={goToPrev} className="slider-button-left" disabled={!hasPrev}>
          ←
        </button>
        <button onClick={goToNext} className="slider-button-right" disabled={!hasNext}>
          →
        </button>
      </div>


    
  );
};

export default Slider;