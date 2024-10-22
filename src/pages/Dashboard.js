import React, { Fragment } from 'react';
import MetaData from '../components/MetaData';
import '../css/Dashboard.css';
import City from "../asset/City.png"
import { FaCalendarAlt, FaCheckCircle, FaWindowClose, FaClock } from "react-icons/fa";

function Dashboard() {
  return (
    <Fragment>
      <MetaData title="Dashboard" />
      <div className='row'>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <div style={{ padding: "50px 5px 10px 10px" }}>
            <h3 style={{ color: "#21bcff", fontSize: "2.2rem" }}>Good Day !</h3>
            <h6 style={{ fontSize: "20px" }}>Enjoy Every Second of it.</h6>
          </div>
        </div>
        <div className='col-lg-5 col-md-6 col-sm-12'>
          <img width="650" height="150" src={`${City}`} alt='city' />
        </div>
      </div>
      <div className='row pt-2'>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='card '>
            <div className='card-block block1'>
              <div className='d-flex justify-content-around'>
                <p>Working Days</p>
                <FaCalendarAlt style={{ color: 'orange', fontSize: '20px' }} />
              </div>
              <div className='count'>
                <p className='text-center'>00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='card'>
            <div className='card-block block2'>
              <div className='d-flex justify-content-around'>
                <p>Present Days</p>
                <FaCheckCircle style={{ color: 'orange', fontSize: '20px' }} />
              </div>
              <div className='count'>
                <p className='text-center'>00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='card'>
            <div className='card-block block3'>
              <div className='d-flex justify-content-around'>
                <p>Absent Days</p>
                <FaWindowClose style={{ color: 'orange', fontSize: '20px' }} />
              </div>
              <div className='count'>
                <p className='text-center'>00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='card'>
            <div className='card-block block4'>
              <div className='d-flex justify-content-around'>
                <p>Late Check-In</p>
                <FaClock style={{ color: 'orange', fontSize: '20px' }} />
              </div>
              <div className='count'>
                <p className='text-center'>00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default Dashboard;
