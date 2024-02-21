import React, { useEffect, useRef } from 'react'
import planeview from './planeview.webp'
import pondstreet from './pondstreet.jpeg'
import beachplane from './beachplane.jpg'
import maldives from './maldives.jpeg'
import paris from './paris.jpeg'
import bali from './bali.jpg'
import banff from './banff.jpeg'
import london from './london.jpeg'
import Cappadocia from './Cappadocia.jpeg'
import Colosseum from './Colosseum.jpg'
import pakistan from './pakistan.jpeg'
import Dubai from './Dubai.webp'
import { NavLink } from 'react-router-dom';

const Destinations = () => {
  const desRow1Ref = useRef(null);
  const desRow2Ref = useRef(null);
  const desRow3Ref = useRef(null);

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
          entry.target.classList.add('animate-desrow');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (desRow1Ref.current) {
      observer.observe(desRow1Ref.current);
    }
    if (desRow2Ref.current) {
      observer.observe(desRow2Ref.current);
    }
    if (desRow3Ref.current) {
      observer.observe(desRow3Ref.current);
    }

    return () => {
      if (desRow1Ref.current) {
        observer.unobserve(desRow1Ref.current);
      }
      if (desRow2Ref.current) {
        observer.unobserve(desRow2Ref.current);
      }
      if (desRow3Ref.current) {
        observer.unobserve(desRow3Ref.current);
      }
    };
  }, []);
  return (
    <div className='destinations'>
      <div className="mainhomecontainer">
        <div className="mhcleft">
          <h1 className='letw'>Let's know About <strong className='world'> Destinations</strong></h1>
          <NavLink className='booknowbtnhome' to='/Booking'>Book Now</NavLink>
        </div>
        <div className="mhcright">
          <img className='mhcimg mhcimg1' width={280} height={450} src={beachplane} />
          <img className='mhcimg mhcimg2' width={280} height={450} src={planeview} />
          <img className='mhcimg mhcimg3' width={280} height={450} src={pondstreet} />
        </div>
      </div>
      <div className="alldestinations">
        <h1 className='h1destinations'>Destinations</h1>
        <div className="desrow1 " ref={desRow1Ref}>
          <div className="des des1">
            <img className='desimg' src={maldives} width={340} />
            <h1 className='h1des'>Maldives</h1>
          </div>
          <div className="des des2" >
            <img className='desimg' src={paris} width={340} />
            <h1 className='h1des'>Paris </h1>
          </div>
          <div className="des des3">
            <img className='desimg' src={bali} width={340} />
            <h1 className='h1des'>Bali </h1>
          </div>
        </div>
        <div className="desrow2" ref={desRow2Ref}>
          <div className="des des4">
            <img className='desimg' src={banff} width={340} />
            <h1 className='h1des'>Banff</h1>
          </div>
          <div className="des des5">
            <img className='desimg' src={london} width={340} />
            <h1 className='h1des'>London</h1>
          </div>
          <div className="des des6">
            <img className='desimg' src={Cappadocia} width={340} />
            <h1 className='h1des'>Cappadocia</h1>
          </div>
        </div>
        <div className="desrow3" ref={desRow3Ref}>
          <div className="des des7">
            <img className='desimg' src={Colosseum} width={340} />
            <h1 className='h1des'>Colosseum</h1>
          </div>
          <div className="des des8">
            <img className='desimg' src={pakistan} width={340} />
            <h1 className='h1des'>Pakistan</h1>
          </div>
          <div className="des des9">
            <img className='desimg' src={Dubai} width={340} />
            <h1 className='h1des'>Dubai</h1>
          </div>
        </div>
      </div>
      <h1 className='heading'>Reviews</h1>
      <div className='banner2'>
        <div className='bannerleft'>
          <h1 className='bannerh1'>What Tourists Says About Us</h1>
          <p className='bannerp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta animi nihil ut, maiores repellendus similique, reiciendis autem deleniti velit natus illum. Dolores, dolorem. Id nesciunt ratione quibusdam dolores maxime cumque! Saepe, cupiditate minima perspiciatis, mollitia fugit laboriosam officia, numquam harum sed expedita pariatur ipsum. Alias quisquam voluptatum ratione dignissimos quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis sed tempora unde atque possimus enim incidunt, praesentium quisquam itaque vitae! Aspernatur obcaecati odit iusto ex asperiores recusandae esse corrupti incidunt, praesentium quisquam itaque vitae.</p>
          <NavLink to={'/booking'} className='bannerbtn'>Book Now</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Destinations
