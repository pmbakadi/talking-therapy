// All icons from https://icons.getbootstrap.com/
// unless stated otherwise on the respective view function.
import React from "react"
import PropTypes from "prop-types"

import C from "../constants"
import "./Icon.scss"

const propTypes = {name: PropTypes.string.isRequired}
const defaultProps = {}

export default class Icon extends React.Component {
  render() {
    switch (this.props.name) {
      case "envelope-fill":
        return <EnvelopeFill {...this.props} />
      case "face-time":
        return <FaceTime {...this.props} />
      case "geo-alt":
        return <GeoAlt {...this.props} />
      case "telephone-fill":
        return <TelephoneFill {...this.props} />
      default:
        throw new Error(`Invalid or unimplemented icon \`${this.rops.name}\``)
    }
  }
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

function EnvelopeFill(props) {
  const properties = getIconProperties(props, "envelope-fill")
  return (
    <svg {...properties}>
      <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
    </svg>
  )
}

function FaceTime(props) {
  // Tihs is not a bootstrap icon. Instead, it's taken from:
  // https://commons.wikimedia.org/wiki/File:FaceTime_iOS.svg
  const properties = {
    ...getIconProperties(props, "face-time"),
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 600 600",
    xmlSpace: "preserve",
  }
  // set the desired styles without completely overriding what's
  // potentially given by the user
  properties.styles = {
    enableBackground: "new 0 0 600 600",
    ...(properties.styles || {}),
  }
  return (
    <svg {...properties}>
      <linearGradient id="rect2996_1_" gradientUnits="userSpaceOnUse" x1="-137.5424" y1="785.878" x2="-133.9618" y2="197.7213" gradientTransform="matrix(1 0 0 -1 435.7924 798.4074)">
        <stop  offset="0" style={{stopColor: "#5DF777"}}/>
        <stop  offset="1" style={{stopColor: "#0ABC28"}}/>
      </linearGradient>
      <path id="rect2996" className="st0" d="M137.7,0h324.6C538.6,0,600,61.4,600,137.7v324.6 c0,76.3-61.4,137.7-137.7,137.7H137.7C61.4,600,0,538.6,0,462.3V137.7C0,61.4,61.4,0,137.7,0z"/>
      <path className="st1" d="M91.5,227.3v146.1c0,31.9,25.9,57.7,57.7,57.7h175.8c31.9,0,57.7-25.9,57.7-57.7V227.3 c0-31.9-25.9-57.7-57.7-57.7H149.3C117.4,169.5,91.5,195.4,91.5,227.3z"/>
      <path className="st1" d="M470.8,188.2l-66.2,54.6c-5.9,4.9-9.3,12.1-9.3,19.7v75.6c0,7.6,3.3,14.7,9.1,19.6l66.2,55.6 c15.1,12.6,38,1.9,38-17.7V206C508.7,186.5,485.9,175.7,470.8,188.2z"/>
    </svg>
  )
}

function GeoAlt(props) {
  const properties = getIconProperties(props, "geo-alt")
  return (
    <svg {...properties}>
      <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  )
}

function TelephoneFill(props) {
  const properties = getIconProperties(props, "telephone-fill")
  return (
    <svg {...properties}>
      <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
    </svg>
  )
}

function getIconProperties(props, iconName) {
  const cls = props.className ? (" " + props.className) : ""
  return {
    height: "1em",
    width: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-" + iconName + cls,
    fill: props.fill || "currentColor",
    style: props.style || null,
    xmlns: "http://www.w3.org/2000/svg",
  }
}
