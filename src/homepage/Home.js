import React, { useEffect, useRef } from 'react'
import girlstand from "./girlstand.jpg"
import girlsitting from "./girlsitting.jpg"
import snowyhills from "./snowyhills.jpeg"
import fransisco from "./fransisco.jpeg"
import maldives from "./maldives.jpeg"
import switzerland from "./switzerland.jpeg"
import { NavLink } from 'react-router-dom';



const Home = () => {
  const mainSecondRef = useRef(null);
  const recentTripsRef = useRef(null);


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    window.scrollTo(0, 0);

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('mainsecondcon')) {
            entry.target.classList.add('animate-mainsecondcon');
          } else if (entry.target.classList.contains('recenttripscon')) {
            entry.target.classList.add('animate-recenttripscon');
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (mainSecondRef.current) {
      observer.observe(mainSecondRef.current);
    }

    if (recentTripsRef.current) {
      observer.observe(recentTripsRef.current);
    }

    return () => {
      if (mainSecondRef.current) {
        observer.unobserve(mainSecondRef.current);
      }
      if (recentTripsRef.current) {
        observer.unobserve(recentTripsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="mainhomecontainer">
        <div className="mhcleft">
          <h1 className='letw'>Let's Explore the <strong className='world'> World </strong></h1>
          <NavLink className='booknowbtnhome' to='/Booking'>Book Now</NavLink>
        </div>
        <div className="mhcright">
          <img className='mhcimg mhcimg1' width={280} height={450} src={girlsitting} alt="" />
          <img className='mhcimg mhcimg2' width={280} height={450} src={snowyhills} alt="" />
          <img className='mhcimg mhcimg3' width={280} height={450} src={girlstand} alt="" />
        </div>
      </div>
      <div ref={mainSecondRef} className="mainsecondcon">
        <div className="mainsec1">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane" width="110" height="110" viewBox="0 0 24 24" stroke-width="1" stroke="#fc2d2d" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
          </svg>
          <h1 className='h11'>Pleasant Journey</h1>
          <p className='txts'>A wonderful serenity has taken to the possession of my entire soul.</p>
        </div>
        <div className="mainsec2">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-skyscraper" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#fc2d2d" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M5 21v-14l8 -4v18" />
            <path d="M19 21v-10l-6 -4" />
            <path d="M9 9l0 .01" />
            <path d="M9 12l0 .01" />
            <path d="M9 15l0 .01" />
            <path d="M9 18l0 .01" />
          </svg>
          <h1 className='h11'>Luxuries Hotel</h1>
          <p className='txts'>A wonderful serenity has taken to the possession of my entire soul.</p>
        </div>
        <div className="mainsec3">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-check" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#fc2d2d" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9" />
            <path d="M9 4v13" />
            <path d="M15 7v8" />
            <path d="M15 19l2 2l4 -4" />
          </svg>
          <h1 className='h11'>Travel Guide</h1>
          <p className='txts'>A wonderful serenity has taken to the possession of my entire soul.</p>
        </div>
      </div>
      <h1 className='rt'>Recent Tours</h1>
      <div ref={recentTripsRef} className="recenttripscon">
        <div className="trip1">
          <img className='tripsimg' src={fransisco} width={350} />
          <p>Oct 12, 2019</p>
          <h2 className='h12'>Fransisco</h2>
        </div>
        <div className="trip2">
          <img className='tripsimg' src={maldives} width={350} />
          <p>Aug 19, 2020</p>
          <h2 className='h12'>Maldives</h2>
        </div>
        <div className="trip3">
          <img className='tripsimg' src={switzerland} width={350} />
          <p>Sep 20, 2020</p>
          <h2 className='h12'>Switzerland</h2>
        </div>
      </div>
      

      <h1 className='heading'>Reviews</h1>
      <div className='banner7'>
        <div className='bannerleft'>
          <h1 className='bannerh1'>What Tourists Says About Us</h1>
          <p className='bannerp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta animi nihil ut, maiores repellendus similique, reiciendis autem deleniti velit natus illum. Dolores, dolorem. Id nesciunt ratione quibusdam dolores maxime cumque! Saepe, cupiditate minima perspiciatis, mollitia fugit laboriosam officia, numquam harum sed expedita pariatur ipsum. Alias quisquam voluptatum ratione dignissimos quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis sed tempora unde atque possimus enim incidunt, praesentium quisquam itaque vitae! Aspernatur obcaecati odit iusto ex asperiores recusandae esse corrupti incidunt, praesentium quisquam itaque vitae.</p>
          <NavLink to={'/booking'} className='bannerbtn'>Book Now</NavLink>
        </div>
      </div>


      
    </div>
  )
}

export default Home
