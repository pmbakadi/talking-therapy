import React from "react"
import PropTypes from "prop-types"

import C from "../constants"
import "./AboutSection.scss"

import profilePhoto from "../images/patience.jpg"

const propTypes = {
}

const defaultProps = {
}

export default class AboutSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dimensions: null,
      width: null,
      height: null,
      // TODO: hmm... can I do something similar to top/left
      // but hide that part of the image instead
    }
  }

  title() {
    return "about"
  }

  static calculateCurrentDimensions() {
    return {width: null, height: null}
  }

  onResize() {
    const {width, height} = AboutSection.calculateCurrentDimensions(
      this.state.dimensions
    )
    this.setState({width, height})
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
      const {width, height} = AboutSection.calculateCurrentDimensions(
        dimensions
      )

      return {dimensions, width, height}
    })
  }

  render() {
    return <AboutSectionView
      {...this.props}
      onLoad={this.onImageLoad.bind(this)}
      title={this.title()} />
  }
}

AboutSection.propTypes = propTypes
AboutSection.defaultProps = defaultProps

function AboutSectionView(props) {
  const imageStyles = {}
  return (
    <div id={props.title} className="py-5 bg-light">
      <div className="wrapper py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 mb-4 d-flex flex-column justify-content-center">
              <img
                className="w-100"
                src={profilePhoto}
                style={imageStyles}
                onLoad={props.onLoad}
                alt="background image" />
            </div>
            <div className="col-12 col-md-7">
              <div className="h5 text-primary font-weight-bolder mb-3">
                Hi, I'm Patience M. Mbakadi
              </div>
              <div className="h6 text-secondary font-weight-bolder mb-3">
                a psychotherapist and professional mental health worker
              </div>
              <div className="text-sm">
                <p>
                  My own life experience, my education and work
                  experience lead me to the challenging world of
                  professional counselling and psychotherapy, and
                  I see my role as a mental health worker and
                  psychotherapist.
                </p>
                <p>
                  I describe my role and ambition as one of being
                  a companion walking beside my clients as they
                  have to cross bridges to the new understanding
                  of themselves and their life meaning.
                </p>
              <div className="h6 text-secondary font-weight-bolder mb-3">
                educational background
              </div>
                <ul>
                  <li>Bachelor’s Degree in Counselling</li>
                  <li>MSc in Psychology</li>
                  <li>MSc in Theology - Philosophy</li>
                  <li>Diplomat in Cognitive Behaviour therapy (CBT)</li>
                  <li>Diplomat in IAPT</li>
                  <li>
                    Diplomat in British Association of Counsellors
                    and Psychotherapists
                  </li>
                </ul>
              <div className="h6 text-secondary font-weight-bolder mb-3">
                experience
              </div>
                <p>
                  I have had extensive training that as shaped me
                  to the ability to use a full range of therapeutic
                  approaches including: Person-centred, Psychodynamic,
                  compassion-focused and CBT as I believe that
                  everything depends on the given client.
                </p>
                <p>
                  I have been providing general counselling, Bereavement
                  counselling and mental health counselling to adults
                  and young people for over 10 years across a range
                  of Organisation such as NHS, CAMHS and private
                  bereavement services.
                </p>
              <div className="h6 text-secondary font-weight-bolder mb-3">
                {C.website}
              </div>
                <p>
                  I have created a safe and supportive environment,
                  free of Judgement, were we can gently explore together
                  what is going on in your daily life.
                </p>
                <p>
                  We are registered member of British Association
                  of counsellors and psychotherapists and we are
                  bound by its code of Ethics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
