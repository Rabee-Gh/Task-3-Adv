import React from 'react';
import './Timeline.css'; 

const Timeline = () => {
    const events = [
        {
          year: "2023",
          title: "Resilience and Future Horizons",
          description: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
        },
        {
          year: "2017",
          title: "Innovation and Technology",
          description: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
        },
        {
          year: "2012",
          title: "Expansion and Recognition",
          description: "These years marked a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
        },
        {
          year: "2005",
          title: "Inception and Growth",
          description: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
        },
      ];
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>

          <div className="timeline-year">
                <div className="year-box">
                    <img src="/assets/images/timeline.png" alt="any" />
                    <h1>{event.year}</h1>
                </div>
          </div>

          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Timeline;