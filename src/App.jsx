import React from "react"
import PropTypes from "prop-types"

import C from "./constants"

import NavigationBar from "./components/NavigationBar"

const propTypes = {
}

export default class App extends React.Component {
  render() {
    return (
      <>
      {this.props.children}
      <footer className="footer mt-auto py-4 px-4 bg-dark text-light text-sm">
        <div className="container">
          Copyright &copy; 2020 {C.website}
        </div>
      </footer>
      </>
    )
  }
}

App.propTypes = propTypes
