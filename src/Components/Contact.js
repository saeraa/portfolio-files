import React, { memo } from 'react'
import iconGithub from ".././img/icon_github.png"
import iconGmail from ".././img/icon_gmail.png"
import iconLinkedIn from ".././img/icon_linkedin.png"
import iconTwitter from ".././img/icon_twitter.png"
import iconPhone from ".././img/icon_phone.png"
import ".././styles/contact.css"

const Contact = memo((props) => {
    return (

        <section className="section-contact">

            <div id="contact">

                <a href="https://github.com/saeraa" target="_blank" rel="noreferrer">
                    <div className="contact-git">
                        <img src={iconGithub} alt="Github icon" /> github.com/saeraa
                    </div>
                </a>

                <a href="https://twitter.com/saerargh" target="_blank" rel="noreferrer">
                    <div className="contact-twitter">
                        <img src={iconTwitter} alt="Twitter Icon" /> twitter.com/saerargh
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/sara-andersen-ekholm/" target="_blank" rel="noreferrer">
                    <div className="contact-linkedin">
                        <img src={iconLinkedIn} alt="LinkedIn Icon" /> linkedin.com/in/sara-andersen-ekholm
                    </div>
                </a>

                <div className="contact-mail">
                    <img src={iconGmail} alt="Email Icon" /> saeraa@gmail.com
                </div>

                <div className="contact-irl">
                    <img src={iconPhone} alt="Phone icon" className="icon-phone" /> <span>+46 (0) 707 33 51 38</span>
                </div>
            </div>


        </section>
    )
})


export default Contact