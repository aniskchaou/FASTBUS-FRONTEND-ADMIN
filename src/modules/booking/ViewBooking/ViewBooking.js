import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ViewBooking.css';

const ViewBooking = (props) => {

  const [booking, setBooking] = useState(props.booking);

  useEffect(() => {
    setBooking(props.booking)
    console.log(props.booking)
  }, [props.booking]);

  return (

    <div className="ViewBooking">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">{booking.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Date</th>
            <td>{booking.approximate_time}</td>
          </tr>
          <tr>
            <th scope="row">Route</th>
            <td>{booking.route_id}</td>
          </tr>
          <tr>
            <th scope="row">Prix</th>
            <td>{booking.price}</td>
          </tr>
          <tr>
            <th scope="row">Statut </th>
            <td>{booking.status}</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
};

ViewBooking.propTypes = {};

ViewBooking.defaultProps = {};

export default ViewBooking;
