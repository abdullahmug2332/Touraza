import React from 'react'
import ticketgirl from './ticketgirl.webp'
import ship from './ship.jpeg'
import pullofparis from './pullofparis.jpeg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Viewstatus = () => {
    const [bookingDetails, setBookingDetails] = useState({});

    useEffect(() => {
        const storedBookingDetails = localStorage.getItem('bookingDetails');
        if (storedBookingDetails) {
            setBookingDetails(JSON.parse(storedBookingDetails));
        }
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <div className="mainhomecontainer">
                <div className="mhcleft">
                    <h1 className='letw'>Let's check your <strong className='world'>Bookings</strong></h1>
                    <NavLink className='booknowbtnhome' to='/Booking'>Book Now</NavLink>
                </div>
                <div className="mhcright">
                    <img className='mhcimg mhcimg1' width={280} height={450} src={ship} alt="" />
                    <img className='mhcimg mhcimg2' width={280} height={450} src={ticketgirl} alt="" />
                    <img className='mhcimg mhcimg3' width={280} height={450} src={pullofparis} alt="" />
                </div>
            </div>
            <div className="status">
                <h1 className='ys'>Your Status</h1>
                <table>
                    <tr>
                        <th className='th'>Name</th>
                        <th className='th'>Phone</th>
                        <th className='th'>Destination</th>
                        <th className='th'>Num of persons</th>
                        <th className='th'>Class</th>
                        <th className='th'>Date and Time</th>

                    </tr>
                    <tr>
                        <td className='td'>{bookingDetails.fullName}</td>
                        <td className='td'>{bookingDetails.phoneNumber}</td>
                        <td className='td'>{bookingDetails.destination}</td>
                        <td className='td'>{bookingDetails.numberOfPersons}</td>
                        <td className='td'>{bookingDetails.travelClass}</td>
                        <td className='td'>{bookingDetails.dateAndTime}</td>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Viewstatus
