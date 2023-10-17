import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialMenu } from '../../utilits/constant/Constants'

export default function Testimonials() {

    const [changeSlider, setChangeSlider] = useState(0)

    const goToPrevius = () => {
        const isFirstSlide = changeSlider === 0
        const newIndex = isFirstSlide ? testimonialMenu.length - 1 : changeSlider - 1
        setChangeSlider(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = changeSlider === testimonialMenu.length - 1
        const newIndex = isLastSlide ? 0 : changeSlider + 1
        setChangeSlider(newIndex)
    }

  return (
    <section className="testimonial">
        <div className="container">

            <div className="row text-center">
                <div className="col-12">
                    <p className="red">Testimonials</p>
                    <h2 className="title">Trust our clients</h2>
                </div>
            </div>


            <div className="row align-items mt-50 mt-30">
                
                <div className="col-1 order1 col-md-6">
                    <div className="left btn" onClick={goToPrevius}>
                        <i class="fa-sharp fa-solid fa-arrow-left"></i>
                    </div>
                </div>

                <div className="col-10 col-md-12 order-1">

                    <div className="img">
                        <img src={testimonialMenu[changeSlider].image} alt="" />
                    </div>

                    <p><span>{testimonialMenu[changeSlider].name} </span> {testimonialMenu[changeSlider].job}</p>

                    <ul>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                    </ul>

                    <p className="text">{testimonialMenu[changeSlider].comment}</p>

                </div>

                <div className="col-1 order0 col-md-6">
                    <div className="right btn" onClick={goToNext}>
                        <i class="fa-sharp fa-solid fa-arrow-right"></i>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}