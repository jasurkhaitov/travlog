import React from 'react'
import PointImg from '../../utilits/image/png/point.png'
import './Point.css'

export default function Point() {
  return (
    <section className="point Discover">

         <div className="col-7 col-xl-12">
            <img src={PointImg} alt="" />
        </div>

        <div className="col-4 col-xl-10 col-point-12">

            <p className="red">Travel Point</p>
            <h2 className="title">We helping you find your dream location</h2>
            <p className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

            <div className="feature">

                <div className="card">
                    <p>500+</p>
                    <p>Holiday Package</p>
                </div>

                <div className="card">
                    <p>100</p>
                    <p>Luxury Hotel</p>
                </div>

                <div className="card">
                    <p>7</p>
                    <p>Premium Airlines</p>
                </div>

                <div className="card">
                    <p>2k+</p>
                    <p>Happy Customer</p>
                </div>

            </div>

        </div>  
    </section>
  )
}