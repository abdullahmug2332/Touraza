import React, { useEffect } from 'react'
import manonbike from './manonbike.jpeg'
import waterfall from './waterfall.jpeg'
import aeroplane from './aeroplane.webp'
import manupwater from './manupwater.jpeg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Booking = () => {
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState({
    fullName: '',
    phoneNumber: '',
    destinations: '',
    numberOfPersons: '',
    dateAndTime: '',
    additionalInfo: '',
    travelClass: '',
    cardType: '',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };
  const handleBooking = (e) => {
    e.preventDefault();
    const updatedBookingDetails = { ...bookingDetails, destination: bookingDetails.destinations, travelClass: bookingDetails.travelClass };
    localStorage.setItem('bookingDetails', JSON.stringify(updatedBookingDetails));
    alert(`Your Tickets are Booked 
Thank You for booking 
Touraza`)
  };
  return (
    <div className='bookingcon'>
      <div className="mainhomecontainer">
        <div className="mhcleft">
          <h1 className='letw'>Let's Book Your <strong className='world'>Tickets</strong></h1>
          <NavLink className='booknowbtnhome' to='/Booking'>Book Now</NavLink>
        </div>
        <div className="mhcright">
          <img className='mhcimg mhcimg1' width={280} height={450} src={aeroplane} alt="" />
          <img className='mhcimg mhcimg2' width={280} height={450} src={manupwater} alt="" />
          <img className='mhcimg mhcimg3' width={280} height={450} src={manonbike} alt="" />
        </div>
      </div>
      <h1 className='byt'>Book Your Tickets</h1>
      <div className="bookingform">
        <form onSubmit={handleBooking}>
          <div className="name">
            <label className='labels'>Full Name:</label><br />
            <input type="text" name='fullName' onChange={handleInputChange} className='inputs fullname' />
          </div>
          <div className="phone">
            <label className='labels'>Phone Number:</label><br />
            <input type="number" className="inputs phone" onChange={handleInputChange} name="phoneNumber" />
          </div>
          <div className="destination">
            <label className='labels'>Destination:</label><br />
            <select name='destinations' onChange={handleInputChange} className="selectdes">
              <option>Select Destination</option>
              <option selected>Maldives</option>
              <option selected>Paris</option>
              <option selected>Bali </option>
              <option selected>Banff</option>
              <option selected>London</option>
              <option selected>Cappadocia</option>
              <option selected>Colosseum</option>
              <option selected>Pakistan</option>
              <option selected>Dubai</option>
            </select>
          </div>
          <div className="numberofpersons">
            <label className='labels'>Number of Persons:</label><br />
            <select name='numberOfPersons' onChange={handleInputChange} className='selectpersons'>
              <option selected >1 Person</option>
              <option selected >2 Person</option>
              <option selected >3 Person</option>
              <option selected >4 Person</option>
              <option selected >5 Person</option>
              <option selected >6 Person</option>
              <option selected >6+ Person</option>
            </select>
          </div>
          <div className="dateandtime">
            <label className='labels'>Date and Time:</label><br />
            <input type="datetime-local" onChange={handleInputChange} className=" inputs dt" name="dateAndTime" /><br />
          </div>
          <div className="additionalinfo">
            <label className='labels'>Additional Information:</label><br />
            <textarea rows="7" cols="25" className='textarea'></textarea>
          </div>
          <div className="class">
            <label className='labels'>Class:</label><br />
            <select onChange={handleInputChange} name='travelClass' className="classselect">
              <option selected>Select class</option>
              <option selected>Economy Class</option>
              <option selected>Business Class</option>
              <option selected>VIP Class</option>
            </select>
          </div>
          <div className="card">
            <label className='labels'>Select your card:</label><br />
            <select className="cardtype">
              <option value="">Select card</option>
              <option value="">VISA</option>
              <option value="">PAYPAK</option>
            </select>
          </div>
          <button type='submit' className='booknowbtn'>
            Book Now
          </button>
        </form>
        <div className="rightform">
          <img className='formimg' src={waterfall} width={720} height={1271} />
        </div>
      </div>
    </div>
  )
}

export default Booking
