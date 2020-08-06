import React from "react"
import PropTypes from "prop-types"

import C from "../constants"
import "./ContactSection.scss"

import Icon from "./Icon"

const propTypes = {
}

const defaultProps = {
}

export default class ContactSection extends React.Component {
  constructor(props) {
    super(props)
  }

  title() {
    return "contact"
  }

  render() {
    return <ContactSectionView {...this.props} title={this.title()} />
  }
}

ContactSection.propTypes = propTypes
ContactSection.defaultProps = defaultProps

function ContactSectionView(props) {
  return (
    <div id={props.title} className="bg-primary pt-4 pb-2">
      <div className="wrapper pt-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div className="h5 text-white font-weight-normal">
                <i>Get Started</i>
              </div>
              <div className="text-sm text-white font-weight-lighter mb-3">
                <p>
                Our counselling sessions will follow the first
                session of Initial assessment or Consultation,
                  and every session last 50 minutes.
                </p>
                <p>
                  We operate from consulting rooms in
                  London and Essex; and we also provide counseling
                  by phone, zoom, facetime and skype.
                </p>
                <p className="mb-0">
                  <b>Fees:</b> £45/session.
                </p>
              </div>
              <div className="h5 text-white font-weight-normal">
                <i>Cancellation Policy</i>
              </div>
              <div className="text-sm text-white font-weight-lighter">
                The greatest benefit of therapeutic work is gained
                through a regular attendance and the ability to establish
                a good professional relationship between you and your
                counsellor. But in case you are not able to attend your
                planned session, please give at least 24 hours cancellation
                notice.
              </div>
            </div>
            <div className="col-12 col-md-1 col-lg-1 col-xl-1">
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-3 mb-4">
              <div className="row mb-2">
                <div className="h4 text-white font-weight-bolder col-12">
                  Get in Touch
                </div>
              </div>

              <ContactValue
                icon={<Icon name="telephone-fill" className="text-primary"/>}
                value={C.phone_1}/>

              <ContactValue
                icon={<Icon name="telephone-fill" className="text-primary"/>}
                value={C.phone_2}/>

              <ContactValue
                icon={<Icon name="envelope-fill" className="text-primary"/>}
                value={<a href={`mailto:${C.email}`} className="email">{C.email}</a>}/>

              <ContactValue
                icon={<Icon name="geo-alt" className="text-primary"/>}
                value={"London, Essex / UK"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactValue(props) {
  return (
    <div className="row text-white font-weight-bolder mt-1 mb-2">
      <div className="col-auto icon-col">
        <span className="icon-wrapper">
          {props.icon}
        </span>
      </div>
      <div className="col contact-value-col">
        <div className="contact-value-wrapper">
          {props.value}
        </div>
      </div>
    </div>
  )
}
