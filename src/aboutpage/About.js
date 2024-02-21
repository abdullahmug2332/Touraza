import React, { useEffect, useRef } from 'react'
import climber from './climber.jpeg'
import girlrunning from './girl running.jpeg'
import effeltower2 from './effeltower2.jpeg'
import effelnight from './effelnight.webp'
import ceo from './ceo.jpg'
import mapping from './maping.jpg'
import main from './main.jpg'
import { NavLink } from 'react-router-dom';



const About = () => {
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
          <h1 className='letw'>Let's know About <strong className='world'> Us </strong></h1>
          <NavLink className='booknowbtnhome' to='/Booking'>Book Now</NavLink>
        </div>
        <div className="mhcright">
          <img className='mhcimg mhcimg1' width={280} height={450} src={climber} alt="" />
          <img className='mhcimg mhcimg2' width={280} height={450} src={effeltower2} alt="" />
          <img className='mhcimg mhcimg3' width={280} height={450} src={girlrunning} alt="" />
        </div>
      </div>
      <div className="ceocon">
        <div className="ceoleft">
          <img className='ceoimg' src={ceo} width={300} />
          <h1 className='ceoname'>Isabella James</h1>
          <h3 className='ceorank'>CEO & Founder of Touraza Co.</h3>

        </div>
        <div className="ceoright">
        <h1 className='ceonamea'>About Isabella James</h1>
          <p className='ceocv'>Meet Isabella James, the driving force behind Touraza's success as the CEO. With a deep passion for travel, Isabella has curated unique and unforgettable experiences for every explorer. Her commitment to excellence and a keen eye for innovation have shaped Touraza into a leading name in the travel industry. Isabella's leadership is marked by a dedication to responsible tourism, ensuring that each journey leaves a positive impact. As a storyteller and advocate for immersive exploration, she continues to redefine travel, inviting you to embark on journeys that go beyond the ordinary. With Isabella's vision, Touraza is not just a travel company; it's a gateway to extraordinary adventures.</p>
        </div>
      </div>
      <div className="ourstorycon">
        <h2 className='ourstory'>Our Story</h2>
        <div className="completestory">
          <p >
            Welcome to Touraza, your gateway to unparalleled travel experiences! At Touraza, we transcend the conventional boundaries of exploration, crafting journeys that unfold as unique stories. Our narrative is woven with a passion for wanderlust and a commitment to curate extraordinary adventures. Born from the vision of a team deeply rooted in the love for travel, Touraza stands as a testament to the belief that every voyage should be an immersive tale waiting to be told. With a blend of expertise and a genuine enthusiasm for discovery, we embark on a mission to redefine the art of travel. Join us on a journey where each destination becomes a chapter, and every moment is an opportunity to create memories that last a lifetime. This is our story, and we invite you to be an integral part of it—because at Touraza, your adventure is not just a trip; it's a narrative waiting to unfold. Born from the vision of a team deeply rooted in the love for travel, Touraza stands as a testament to the belief that every voyage should be an immersive tale waiting to be told. With a blend of expertise and a genuine enthusiasm for discovery, we embark on a mission to redefine the art of travel. Join us on a journey where each destination becomes a chapter, and every moment is an opportunity to create memories that last a lifetime. This is our story, and we invite you to be an integral part of it—because at Touraza, your adventure is not just a trip; it's a narrative waiting to unfold.
          </p>
          <img className='aboutimgs' src={main} width={1150} />
          <p>
            Embark on a transformative journey with Touraza, a distinguished name in the realm of travel and exploration. Our story is a captivating narrative that unfolds as a testament to our unwavering commitment to providing unparalleled tour and travel experiences. Founded by a passionate team of travel enthusiasts, Touraza is more than just a company; it's a collective vision to redefine the very essence of wanderlust. Our roots lie in a profound love for exploration, a love that has propelled us to curate journeys that go beyond the ordinary. Each adventure we offer is a carefully crafted chapter in a larger-than-life story, a story that is uniquely yours to tell. Founded by a passionate team of travel enthusiasts, Touraza is more than just a company; it's a collective vision to redefine the very essence of wanderlust. Our roots lie in a profound love for exploration, a love that has propelled us to curate journeys that go beyond the ordinary. Each adventure we offer is a carefully crafted chapter in a larger-than-life story, a story that is uniquely yours to tell.</p>
          <img className='aboutimgs' src={mapping} width={1150} />
          <p>
            At Touraza, we believe that travel is not merely a journey from one destination to another; it is a transformative experience, an opportunity to discover the world and oneself. Our team of seasoned experts brings together a wealth of knowledge, a keen eye for detail, and a genuine passion for creating memories. From the moment you embark on a Touraza adventure, you're not just a traveler; you're an integral part of a grand narrative waiting to unfold.
          </p>
          <p>As we traverse the globe, we strive to provide not just trips, but immersive tales that leave an indelible mark on your heart. Whether you're seeking the thrill of exotic locales, the serenity of cultural retreats, or the adrenaline of adventure, Touraza has a story crafted just for you. So, come join us and be a protagonist in your own extraordinary journey. With Touraza, your story is not just a travel itinerary; it's a captivating saga of exploration, discovery, and the joy of the journey itself. Welcome to Touraza—where every adventure is a story waiting to be lived.</p>
        </div>
      </div>



      <div className="secondaboutcon">
        <div className="saleft">
          <img className='effelnight' src={effelnight} width={470} />
        </div>
        <div className="saright">
          <h1 className='h1s'>About Touraza</h1>
          <p className="paraup">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p className="paradown">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
          <div className="info1">
            <div className="years">
              <h1 className='h1s'>50+</h1>
              <p className="dis">Years of Experience</p>
            </div>
            <div className="tours">
              <h1 className='h1s'>250+</h1>
              <p className="dis">Total Tours</p>
            </div>
          </div>
          <div className='info2'>
            <div className="staff">
              <h1 className='h1s'>130+</h1>
              <p className="dis">Number of Staff</p>
            </div>
            <div className="customers">
              <h1 className='h1s'>5000+</h1>
              <p className="dis">Happy Customers</p>
            </div>
          </div>
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
    </div>
  )
}

export default About
