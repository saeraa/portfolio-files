import React from "react"
import '.././styles/header.css'
import { NavLink } from "react-router-dom"

export default function Header(props) {
    let initialMode = !window.matchMedia('(prefers-color-scheme: dark)').matches

    const [colorMode, setColorMode] = React.useState(initialMode)
    const r = document.querySelector(':root')

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches === false) {
            setColorMode((prevMode) => prevMode = true)
        } else {
            setColorMode((prevMode) => prevMode = false)
        }
    })

    if (!colorMode) { /* dark mode */
        r.style.setProperty("--background-color", "#303030")
        r.style.setProperty("--background-color-two", "#3f3f3f")
        r.style.setProperty("--links-color", "#efefef")
        r.style.setProperty("--links-color-two", "#d0d0d0")
        r.style.setProperty("--links-color-hover", "#416C48")
        r.style.setProperty("--box-shadow-color", "rgba(0, 0, 0, 0.1)")
        r.style.setProperty("--box-shadow-color-two", "rgba(0, 0, 0, 0.4)")
        r.style.setProperty("--box-shadow-color-three", "rgba(0, 0, 0, 0.6)")
        r.style.setProperty("--accent-color", "#416C48")
        r.style.setProperty("--accent-color-two", "#888888")
        r.style.setProperty("--accent-color-three", "hsl(32deg 80% 75%)")
        r.style.setProperty("--accent-color-opacity", "#416c4871")
        r.style.setProperty("--portrait-background", "rgba(0, 0, 0, 0.1)")
    } else { /* light mode */
        r.style.setProperty("--background-color", "#efefef")
        r.style.setProperty("--portrait-background", "#efefef")
        r.style.setProperty("--background-color-two", "#d2d2d2")
        r.style.setProperty("--links-color", "#303030")
        r.style.setProperty("--links-color-two", "#888888")
        r.style.setProperty("--links-color-hover", "#303030")
        r.style.setProperty("--box-shadow-color", "rgba(0, 0, 0, 0.1)")
        r.style.setProperty("--box-shadow-color-two", "rgba(0, 0, 0, 0.3)")
        r.style.setProperty("--box-shadow-color-three", "rgba(0, 0, 0, 0.6)")
        r.style.setProperty("--accent-color", "#416c48")
        r.style.setProperty("--accent-color-two", "#888888")
        r.style.setProperty("--accent-color-three", "#416C48")
        r.style.setProperty("--accent-color-opacity", "rgba(191, 198, 113, 0.129)")
    }

    function changeMode() {
        setColorMode(prevMode => !prevMode)
    }

    return (
        <header>
            <div className="switch">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" defaultChecked={colorMode} onChange={changeMode} />
                    <div className="slider round"></div>
                </label>
            </div>

            <ul>
                <NavLink to="/"
                    className={({ isActive }) =>
                        (isActive ? "selected" : null)}
                ><li>about</li></NavLink>
                <NavLink to="/portfolio"
                    className={({ isActive }) =>
                        (isActive ? "selected" : null)}
                ><li>portfolio</li></NavLink>
                <NavLink to="/contact"
                    className={({ isActive }) =>
                        (isActive ? "selected" : null)}
                ><li>contact</li></NavLink>
            </ul>
        </header>
    )
}