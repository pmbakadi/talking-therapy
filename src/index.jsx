import React from "react"
import ReactDOM from "react-dom"

import "./shared.scss"

import C from "./constants"
import App from "./App"
import BackgroundImage from "./components/BackgroundImage"
import NavigationBar from "./components/NavigationBar"
import HomeSection from "./components/HomeSection"
import ServicesSection from "./components/ServicesSection"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"

window.addEventListener("load", function main() {
  // Render the application
  ReactDOM.render(
    <App>
      <BackgroundImage />
      <NavigationBar />
      <div id="content">
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </App>,
    document.querySelector("#root"),
  )

  // sort of a hack: Since the background image exceeds things a bit,
  // sometimes somehow it's possible to move a bit to the right, and
  // since overflow-x is hidden in the `body` element, it's impossible
  // to scroll back to the left. So, this will periodically check that
  // if we're not back at x=0, it will move back.
  const scrollXBack = () => {
    if (window.scrollX == 0) {
      return
    }
    window.scrollTo(0, window.scrollY)
  }
  scrollXBack()
  setTimeout(() => {
    scrollXBack()
    // setInterval(scrollXBack, 100)
  }, 10)
})

