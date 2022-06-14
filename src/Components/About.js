import React, { memo } from 'react'
import portrait from ".././img/portrait2.png"
import ".././styles/about.css"

const About = memo((props) => {
    return (
        <section className="section-about">
            <div id="start">
                <h1>Hi, I'm Sara.</h1>
                <h2>I am a <strong>web developer</strong>.</h2>
            </div>
            <div id="portrait">
                <div className="portrait">
                    <img src={portrait} alt="Me" />
                </div>
            </div>
        </section>
    )
})


export default About