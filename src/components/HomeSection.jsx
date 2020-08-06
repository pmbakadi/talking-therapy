import React from "react"
import PropTypes from "prop-types"

import C from "../constants"
import "./HomeSection.scss"


const propTypes = {
}

const defaultProps = {
}

export default class HomeSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {height: null}
  }

  title() {
    return "home"
  }

  onResize() {
    const navbarHeight = document.querySelector("#navigation-bar").clientHeight
    const height = window.innerHeight - navbarHeight
    this.setState({height})
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this))
    this.onResize()
  }

  render() {
    return <HomeSectionView
      {...this.props}
      {...this.state}
      title={this.title()} />
  }
}

HomeSection.propTypes = propTypes
HomeSection.defaultProps = defaultProps

function HomeSectionView(props) {
  const styles = {height: props.height}
  return (
    <div id={props.title} className="text-white" style={styles}>
      <div id="home-wrapper">
        <div className="row">
          <div className="col-0 col-sm-0 col-md-1 col-xl-2">
          </div>
          <div className="col-11 col-md-10 col-xl-9">
            <div className="display-4">
              Professional Counseling Services
            </div>
            <div className="home-description col-11 col-xl-10">
              <p>
                A professional counselling services providing general and
                mental health counselling.
              </p>
              <p><i>
                Clear out doubt and confusion in your mind so you can
                start living through your heart, doing only what you
                love and achieving your dreams.
              </i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
