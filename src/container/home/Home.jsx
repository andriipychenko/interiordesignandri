import React from 'react'
import './Home.scss'
import { images } from '../../constants'

const Home = () => {
    return (
        <section id="home" class="home container-fluid p-0">

            <div class="row hero">
                <div class="col pl-3 ml-sm-5 p-0">
                    <img src={images.stopwar} alt="" />
                    <h1 class="text1">Interior Design</h1>
                    <h3 class="text2">Architechture services</h3>
                </div>
            </div>

            <div class="counting">

                <div class="box">
                    <h1 class="count" data-count="1200">1200+</h1>
                    <h3>working hours</h3>
                </div>

                <div class="box">
                    <h1 class="count" data-count="15">15+</h1>
                    <h3>awards</h3>
                </div>

                <div class="box">
                    <h1 class="count" data-count="1000">1000+</h1>
                    <h3>clients</h3>
                </div>

                <div class="box">
                    <h1 class="count" data-count="840">840+</h1>
                    <h3>projects</h3>
                </div>

            </div>

        </section>


    )
}

export default Home
