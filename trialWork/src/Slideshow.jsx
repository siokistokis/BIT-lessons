// import React, { useState, useEffect } from 'react';
// import './Slideshow.css';  // For styling the slideshow (see next step)

// const Slideshow = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const slides = [
//     {
//       src: './img/aerial.jpg',
//       alt: 'Slide 1',
//       description: 'This is Slide 1 with a description about suporting.',
//     },
//     {
//       src: './img/animals.jpg',
//       alt: 'Slide 2',
//       description: 'This is Slide 2 with a description about charyty.',
//     },
//     {
//       src: './img/art.jpg',
//       alt: 'Slide 3',
//       description: 'This is Slide 3 with a description about ........',
//     },
//     {
//       src: './img/ballet.jpg',
//       alt: 'Slide 4',
//       description: 'This is Slide 4 with a description about ............',
//     },
//     {
//       src: './img/event.jpg',
//       alt: 'Slide 5',
//       description: 'This is Slide 5 with a description about ......',
//     },
//     {
//       src: './img/gymnastic.jpg',
//       alt: 'Slide 6',
//       description: 'This is Slide 6 with a description about ......',
//     },
//     {
//       src: './img/music.jpg',
//       alt: 'Slide 7',
//       description: 'This is Slide 7 with a description about .....',
//     },
//     {
//       src: './img/skating.jpg',
//       alt: 'Slide 8',
//       description: 'This is Slide 8 with a description about .....',
//     },
//     {
//       src: './img/sport.jpg',
//       alt: 'Slide 9',
//       description: 'This is Slide 9 with a description about .....',
//     },
//     {
//       src: './img/theatre.jpg',
//       alt: 'Slide 10',
//       description: 'This is Slide 10 with a description about .....',
//     },
//   ];

//   const changeSlide = (n) => {
//     setSlideIndex((prevIndex) => {
//       const newIndex = prevIndex + n;
//       if (newIndex >= slides.length) return 0;
//       if (newIndex < 0) return slides.length - 1;
//       return newIndex;
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       changeSlide(1);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className="slideshow-container">
//       <div className="mySlides fade">
//         <img src={slides[slideIndex].src} alt={slides[slideIndex].alt} />
//         <div className="text">{slides[slideIndex].description}</div>
//       </div>

//       <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
//       <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
//     </div>
//   );
// };

// export default Slideshow;










// import React, { useState, useEffect } from 'react';
// import './Slideshow.css'; // Make sure to have the correct CSS for styling the slideshow

// // Import images
// import slide1 from './img/aerial.jpg';
// import slide2 from './img/animals.jpg';
// import slide3 from './img/art.jpg';
// import slide4 from './img/ballet.jpg';
// import slide5 from './img/event.jpg';
// import slide6 from './img/gymnastic.jpg';
// import slide7 from './img/music.jpg';
// import slide8 from './img/skating.jpg';
// import slide9 from './img/sport.jpg';
// import slide10 from './img/theatre.jpg';

// const Slideshow = () => {
//   const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop back to the last image
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Auto-change slides every 3 seconds
//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, []);

//   return (
//     <div className="slideshow-container">
//       <div className="mySlides fade">
//         <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//         <div className="text">This is Slide {currentIndex + 1} with a description about ...</div>
//       </div>

//       {/* Previous and Next Buttons */}
//       <a className="prev" onClick={prevSlide}>&#10094;</a>
//       <a className="next" onClick={nextSlide}>&#10095;</a>
//     </div>
//   );
// };

// export default Slideshow;






















import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      src: 'public/img/aerial.jpg',
      alt: 'Slide 1',
      description: 'This is Slide 1 with a description about...',
    },
    {
      src: 'public/img/animals.jpg',
      alt: 'Slide 2',
      description: 'This is Slide 2 with a description about...',
    },
    {
      src: 'public/img/art.jpg',
      alt: 'Slide 3',
      description: 'This is Slide 3 with a description about...',
    },
  ];

  const changeSlide = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex >= slides.length) return 0;
      if (newIndex < 0) return slides.length - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src={slides[slideIndex].src} alt={slides[slideIndex].alt} />
        <div className="text">{slides[slideIndex].description}</div>
      </div>

      <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
      <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
    </div>
  );
};

export default Slideshow;






