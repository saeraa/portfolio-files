import React from "react"
import '.././styles/header.css'
import { Link } from "react-router-dom"

export default function Header(props) {
    // let originalMode = localStorage.getItem('colorMode') || true
    const [colorMode, setColorMode] = React.useState(true)
    const r = document.querySelector(':root')

    // console.log(localStorage.getItem('colorMode'))

    // React.useEffect(() => {
    //     originalMode = localStorage.getItem('colorMode')
    //     console.log("colormode from ls " + originalMode)
    //     if (originalMode) {
    //         setColorMode(originalMode)
    //     }
    // }, [])
    // console.log("colormode from state " + colorMode)

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


    // React.useEffect(() => {
    //     localStorage.setItem('colorMode', colorMode)
    // }, [colorMode])

    // const mybox = document.getElementById("checkbox")
    function changeMode() {
        // if (mybox.checked) { console.log("check") } else { console.log("no check") }
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
                <Link to="/"><li>about</li></Link>
                <Link to="/portfolio"><li>portfolio</li></Link>
                <Link to="/contact"><li>contact</li></Link>
            </ul>
        </header>
    )
}