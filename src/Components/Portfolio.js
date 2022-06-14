import React, { memo } from 'react'
import colorpicker from ".././img/portfolio_colorpicker.png"
import css from ".././img/icon_css.png"
import javascript from ".././img/icon_javascript.png"
import react from ".././img/icon_react.png"
import html from ".././img/icon_html.png"
import hangman from ".././img/portfolio_hangedman.png"
import quiz from ".././img/portfolio_quiz.png"

import ".././styles/portfolio.css"

const Portfolio = memo((props) => {
    return (
        <section className="section-portfolio">
            <article className="article-portfolio">
                <a href="https://saera-quizzical.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={quiz} alt="Quizzical App" className="portfolio-img" />
                </a>
                <div>
                    <h2>Quizzical: JavaScript edition</h2>
                    <p className="tools">
                        <span className="icon icon-html"><img src={html} alt="HTML5 Icon" />HTML5</span>
                        <span className="icon icon-css"><img src={css} alt="CSS Icon" />CSS3</span>
                        <span className="icon icon-js"><img src={javascript} alt="JS Icon" />JavaScript</span>
                        <span className="icon icon-react"><img src={react} alt="React Icon" />React</span>
                    </p>
                    <p>A quiz app, with multiple choice questions about JavaScript. </p>
                    <p>See it live <a href="https://saera-quizzical.netlify.app/" target="_blank" rel="noreferrer">here</a>.</p>
                </div>

            </article>


            <article className="article-portfolio">
                <a href="https://saera-hangman.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={hangman} alt="Hangman App" className="portfolio-img" />
                </a>
                <div>
                    <h2>Hangman</h2>

                    <p className="tools">
                        <span className="icon icon-html"><img src={html} alt="HTML5 Icon" />HTML5</span>
                        <span className="icon icon-css"><img src={css} alt="CSS Icon" />CSS3</span>
                        <span className="icon icon-js"><img src={javascript} alt="JS Icon" />JavaScript</span>
                    </p>
                    <p>Play the classic Hangman game. A random word, wordlength 9-15 characters, from an API is chosen.</p>
                    <p>For fun, the word definition is linked when the word is revealed or the game is won.</p>
                    <p>See it live <a href="https://saera-hangman.netlify.app/" target="_blank" rel="noreferrer">here</a>.</p>
                </div>
            </article>


            <article className="article-portfolio">
                <a href="https://saera-colorschemepicker.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={colorpicker} alt="ColorPicker App" className="portfolio-img" />
                </a>
                <div>
                    <h2>Color Scheme Picker</h2>
                    <p className="tools">
                        <span className="icon icon-html"><img src={html} alt="HTML5 Icon" />HTML5</span>
                        <span className="icon icon-css"><img src={css} alt="CSS Icon" />CSS3</span>
                        <span className="icon icon-js"><img src={javascript} alt="JS Icon" />JavaScript</span>
                    </p>
                    <p>A color scheme picker where you can choose the color and
                        recieve a suggested color scheme from an API.</p>
                    <p>See it live <a href="https://saera-colorschemepicker.netlify.app/" target="_blank" rel="noreferrer">here</a>.</p>
                </div>
            </article>
        </section>
    )
})


export default Portfolio