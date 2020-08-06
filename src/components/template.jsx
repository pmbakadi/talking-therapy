import React from "react"
import PropTypes from "prop-types"

import C from "../constants"

const propTypes = {
}

const defaultProps = {
}

export default class X extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <XView {...this.props} />
  }
}

X.propTypes = propTypes
X.defaultProps = defaultProps

function XView(props) {
  return (
    <div>
    </div>
  )
}
