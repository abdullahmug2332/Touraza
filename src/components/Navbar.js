import React from 'react';
import logo from './logo.png'
import { NavLink} from 'react-router-dom';




const Navbar = () => {

  return (
    <div className='navbar'>
      <NavLink  to={'/'} className="navlogo">
        <img src={logo} className='navlogoimg' width={73} height={55} />
        <h1 className='touraza'>Touraza</h1>
      </NavLink>
      <div className="navlinks">
        <NavLink className='navname  navl' to={'/'} >Home</NavLink>
        <NavLink className='navabout navl' to={'/About'}>About</NavLink>
        <NavLink className='navdestinations navl'to={'/Destinations'} >Destinations</NavLink>
        <NavLink className='navbooking navl' to={'/Booking'}>Booking</NavLink>
      </div>
      <div className="SL">
        <NavLink to={'/view-status'}  className='viewstatusbtn'>View Status</NavLink>
        <NavLink to={'/Booking'}  className='navbtn'>Book Now</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

