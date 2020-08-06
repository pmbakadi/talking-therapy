import React from "react"
import PropTypes from "prop-types"

import C from "../constants"
import "./ServicesSection.scss"

const propTypes = {
}

const defaultProps = {
}

export default class ServicesSection extends React.Component {
  constructor(props) {
    super(props)
  }

  title() {
    return "services"
  }

  render() {
    return <ServicesSectionView {...this.props} title={this.title()} />
  }
}

ServicesSection.propTypes = propTypes
ServicesSection.defaultProps = defaultProps

function ServicesSectionView(props) {
  return (
    <div id={props.title} className="py-5">
      <div className="wrapper py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-2">
              <div className="h3 font-weight-bolder text-primary mb-1">
                Our Services
              </div>
            </div>
            <div className="col-12 col-md-10 text-center mb-2">
              <div className="text-sm mb-4">
                <p>
                  Living today is all about connecting, connecting with
                  your loved ones, with the world you live in and with your
                  society. It is all about your ability to be and to
                  remain connected.
                </p>
                <p><b>
                  But if you cannot connect with yourself, your own
                  heart, how will you be able to connect with others?
                </b></p>
                <p>
                  Our services will match you to a professional
                  counsellor that is skilled and able to help you
                  with explore your struggle with
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-0 col-lg-1">
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5 px-3">
              <div className="card bg-light border-primary py-3 rounded-0">
                <div className="card-body py-4 text-center">
                  <div className="card-title text-primary font-weight-bolder">
                    General Counseling
                  </div>
                  <div className="text-sm font-weight-lighter">
                    Relationships, motivation and coaching,
                    marriage, stress, and more.
                  </div>
                </div>
              </div>
              <div className="mb-3">
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5 px-3">
              <div className="card bg-light border-primary py-3 rounded-0">
                <div className="card-body py-4 text-center">
                  <div className="card-title text-primary font-weight-bolder">
                    Mental Health
                  </div>
                  <div className="text-sm font-weight-lighter">
                    Depression, anxiety disorders, low self-esteem,
                    anger management, panic attacks, OCD, PTSD, drugs
                    and alcohol addiction, and more.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
