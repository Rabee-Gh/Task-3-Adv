import React, { useState } from 'react';
import './Gallery.css'; 

import classroom1 from '/assets/images/1.png';
import classroom2 from '/assets/images/2.png';
import classroom3 from '/assets/images/3.png';
import classroom4 from '/assets/images/4.png';
import classroom5 from '/assets/images/1.png';
import library1 from '/assets/images/5.png';
import library2 from '/assets/images/6.png';
import library3 from '/assets/images/7.png';
import library4 from '/assets/images/8.png';
import library5 from '/assets/images/7.png';
import scienceLab1 from '/assets/images/9.png';
import scienceLab2 from '/assets/images/10.png';
import scienceLab3 from '/assets/images/11.png';
import scienceLab4 from '/assets/images/12.png';
import scienceLab5 from '/assets/images/10.png';
import computerLab1 from '/assets/images/13.png';
import computerLab2 from '/assets/images/14.png';
import computerLab3 from '/assets/images/15.png';
import computerLab4 from '/assets/images/16.png';
import computerLab5 from '/assets/images/13.png';
import garden1 from '/assets/images/17.png';
import garden2 from '/assets/images/18.png';
import garden3 from '/assets/images/19.png';
import garden4 from '/assets/images/20.png';
import garden5 from '/assets/images/18.png';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const galleryData = [
    {
      id: 'classrooms',
      title: 'Classrooms',
      description: 'Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.',
      images: [classroom1, classroom2, classroom3, classroom4 ,classroom5],
    },
    {
      id: 'library',
      title: 'Library',
      description: 'Our expansive library is a treasure trove of books, fostering a love for reading and supporting students\' literacy development.',
      images: [library1, library2, library3, library4 ,library5],
    },
    {
      id: 'science-lab',
      title: 'Science Lab',
      description: 'Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.',
      images: [scienceLab1, scienceLab2, scienceLab3, scienceLab4,scienceLab5],
    },
    {
      id: 'computer-lab',
      title: 'Computer Lab',
      description: 'Equipped with age-appropriate technology, the computer lab enhances students\' digital literacy and computational skills.',
      images: [computerLab1, computerLab2, computerLab3, computerLab4 ,computerLab5],
    },
    {
      id: 'garden-nature-area',
      title: 'Garden and Nature Area',
      description: 'Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.',
      images: [garden1, garden2, garden3, garden4,garden5],
    },
  ];

  const filteredData = filter === 'All' ? galleryData : galleryData.filter(item => item.id === filter);

  return (
    <div className="gallery-container">
      <div className="gallery-filters">
        <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
        <button className={filter === 'classrooms' ? 'active' : ''} onClick={() => setFilter('classrooms')}>Classrooms</button>
        <button className={filter === 'library' ? 'active' : ''} onClick={() => setFilter('library')}>Library</button>
        <button className={filter === 'science-lab' ? 'active' : ''} onClick={() => setFilter('science-lab')}>Science Lab</button>
        <button className={filter === 'computer-lab' ? 'active' : ''} onClick={() => setFilter('computer-lab')}>Computer Lab</button>
        <button className={filter === 'garden-nature-area' ? 'active' : ''} onClick={() => setFilter('garden-nature-area')}>Garden and Nature Area</button>
      </div>
      <div className="gallery-items">
        {filteredData.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const GalleryItem = ({ title, description, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((nextIndex) => (nextIndex === images.length - 1 ? 0 : nextIndex + 1));
  };

  return (
    <div className="gallery-item">
      <div className="image-slider">
        <div className="image-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              className={index === currentIndex ? 'active' : ''}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            />
          ))}
       </div>
      </div>
      <div className="galleryheader">
      <h3>{title}</h3>
        <div className="gallerybtn">
        <button className="slider-button prev" onClick={goToPrevious}>&larr;</button>
        <button className="slider-button next" onClick={goToNext}>&rarr;</button>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Gallery;



