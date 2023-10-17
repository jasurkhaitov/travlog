import React from 'react'
import Globus from '../../utilits/image/png/destination 1.png'
import Book from '../../utilits/image/png/booking 1.png'
import Cloudy from '../../utilits/image/png/cloudy 1.png'
import './Main.css'

export default function Main() {
  return (
    <main>
        <div className="container">
            <div className="row">

                <div className="col-5 col-1110-6 col-lg-9 tac col-xsx-12">
                    <p className="red">Services</p>
                    <h2 className="title">Our top value categories for you</h2>
                </div>

                <div className="col-12">
                    <div className="categories">
                        
                    
                            <div className="categoryBox">
                                <img src={Globus} alt="" />
                                <h3>Best Tour Guide</h3>
                                <p className='text'>What looked like a small patch of purple grass, above five feet.</p>
                            </div>

                            <div className="categoryBox">
                                <img src={Book} alt="" />
                                <h3>Easy Booking</h3>
                                <p className='text'>Square, was moving across the sand in their direction.</p>
                            </div>

                            <div className="categoryBox">
                                <img src={Cloudy} alt="" />
                                <h3>Weather Forecast</h3>
                                <p className='text'>What looked like a small patch of purple grass, above five feet.</p>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
  )
}