import React, { memo } from 'react'
import ".././styles/footer.css"
import iconGithub from ".././img/icon_github.png"
import iconGmail from ".././img/icon_gmail.png"
import iconLinkedIn from ".././img/icon_linkedin.png"
import iconTwitter from ".././img/icon_twitter.png"

const Footer = memo((props) => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://github.com/saeraa" target="_blank" rel="noreferrer"><img src={iconGithub} alt="Github Icon" /></a>
                </li>
                <li>
                    <a href="mailto:saeraa@gmail.com" target="_blank" rel="noreferrer"><img src={iconGmail} alt="Email Icon" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sara-andersen-ekholm/" target="_blank" rel="noreferrer"><img src={iconLinkedIn} alt="LinkedIn Icon" /></a>
                </li>
                <li>
                    <a href="https://twitter.com/saerargh" target="_blank" rel="noreferrer"><img src={iconTwitter} alt="Twitter Icon" /></a>
                </li>
            </ul>

        </footer>
    )
})


export default Footer