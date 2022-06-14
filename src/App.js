import './styles/App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Portfolio from "./Components/Portfolio"
import React from 'react'

import { Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* <Route path="*" elemment={<About />} /> */}
          <Route path="/" element={<About />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App


// const [pageDisplay, setPageDisplay] = React.useState("about")

// function changePage(input) {
//   setPageDisplay(input)
// }

      // <Header changePage={changePage} pageDisplay={pageDisplay} />
      // <main>
      //   {pageDisplay === "about" && <About />}
      //   {pageDisplay === "contact" && <Contact />}
      //   {pageDisplay === "portfolio" && <Portfolio />}
      // </main>
      // <Footer />