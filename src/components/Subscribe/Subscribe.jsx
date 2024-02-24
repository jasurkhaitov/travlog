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

                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="c558aafa-c58a-469c-8cb4-411d163a38d6"/>

                            <button type='reset'>Reset</button>

                            <input type="email" name="email" required placeholder='Your Email...'/>

                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
