import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <section className="subscribe Contact">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="formCard">
                        <p className="red">subscribe to our newsletter</p>

                        <h2 className="title">Prepare yourself & let’s explore the beauty of the world</h2>

                        <form action="#!">
                            <input type="email" placeholder='Your Email...'/>

                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
