import React from "react"
import PropTypes from "prop-types"

import C from "../constants"
import H from "../helpers"
import "./NavigationBar.scss"

const propTypes = {
}

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {y: 0, height: -1}
  }

  onScroll() {
    this.setState({y: window.scrollY, height: window.innerHeight})
  }

  scrollToElement(name) {
    const navbar = document.querySelector("#navigation-bar")
    const element = document.querySelector(`#${name}`)
    let top = element.offsetTop - navbar.clientHeight
    H.slowScrollToHeight(top)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll.bind(this))
  }

  render() {
    return <NavigationBarView
      {...this.props}
      {...this.state}
      scrollTo={this.scrollToElement.bind(this)} />
  }
}

NavigationBar.propTypes = propTypes

function NavigationBarView(props) {
  const styles = {}
  if (props.y > 0) {
    const relHeight = props.height * 0.60
    const percentage = props.y > relHeight ? 1 : props.y / relHeight
    styles.backgroundColor = `rgba(42, 42, 66, ${percentage})`
  } else {
    styles.backgroundColor = "rgba(42, 42, 66, 0)"
  }

  const scrollTo = (name) => (() => props.scrollTo(name))

  return (
    <nav
      className="navbar navbar-expand navbar-dark sticky-top d-block"
      style={styles}
      id="navigation-bar">
      <div className="text-center pt-2">
        <div className="h3 text-white font-weight-bolder mb-0">
          {C.website}
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-content"
        aria-controls="navbar-content"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-center"
        id="navbar-content">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              href="#"
              className="nav-link font-weight-lighter"
              onClick={scrollTo("home")}>
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a
              href="#"
              className="nav-link font-weight-lighter"
              onClick={scrollTo("services")}>
              Services
            </a>
          </li>
          <li className="nav-item active">
            <a
              href="#"
              className="nav-link font-weight-lighter"
              onClick={scrollTo("about")}>
              About
            </a>
          </li>
          <li className="nav-item active">
            <a
              href="#"
              className="nav-link font-weight-lighter"
              onClick={scrollTo("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

