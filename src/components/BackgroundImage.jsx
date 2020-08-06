import React from "react"
import PropTypes from "prop-types"

import C from "../constants"
import "./BackgroundImage.scss"

import home from "../images/home.jpg"

const propTypes = {
}

const defaultProps = {
}

export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dimensions: null,
      width: null,
      height: null,
      top: null,
      left: null,
    }
  }

  title() {
    return "background-image"
  }

  static calculateCurrentDimensions({width, height}) {
    const wWidth = window.innerWidth
    const wHeight = window.innerHeight
    const wAspectRatio = wWidth / wHeight
    const aspectRatio = width / height

    if (wAspectRatio < aspectRatio) {
      // in this case, overlap will be width wise
      const currentHeight = wHeight
      const currentWidth = currentHeight * aspectRatio
      const left = (wWidth - currentWidth) / 2
      return {width: currentWidth, height: currentHeight, top: 0, left}
    }

    const currentWidth = wWidth
    const currentHeight = currentWidth / aspectRatio
    const top = wHeight - currentHeight
    return {width: currentWidth, height: currentHeight, top, left: 0}
  }

  onResize() {
    const {width, height, top, left} = BackgroundImage.calculateCurrentDimensions(
      this.state.dimensions
    )
    this.setState({width, height, top, left})
  }

  onImageLoad({target: image}) {
    const self = this
    self.setState((state, props) => {
      // not sure if this is needed but just to be safe (didn't
      // have time to test it), we only set the dimensions
      // if it's not yet set.
      if (state.dimensions) {
        return
      }

      window.addEventListener("resize", self.onResize.bind(this))
      const dimensions = {width: image.offsetWidth, height: image.offsetHeight}
      const {width, height, top, left} = BackgroundImage.calculateCurrentDimensions(
        dimensions
      )

      return {dimensions, width, height, top, left}
    })
  }

  render() {
    return <BackgroundImageView
      {...this.props} {...this.state}
      title={this.title()}
      onLoad={this.onImageLoad.bind(this)}
      />
  }
}

BackgroundImage.propTypes = propTypes
BackgroundImage.defaultProps = defaultProps

function BackgroundImageView(props) {
  const imageStyles = {}
  if (props.width) {
    imageStyles.height = props.height
    imageStyles.minHeight = props.height
    imageStyles.width = props.width
    imageStyles.minWidth = props.width
    imageStyles.top = props.top
    imageStyles.left = props.left
  }
  return (
    <div id={props.title}>
      <img
        className="w-100"
        src={home}
        style={imageStyles}
        onLoad={props.onLoad}
        alt="background image" />
      <div id="shader" style={imageStyles}></div>
    </div>
  )
}
