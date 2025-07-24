import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './whitepaper.css'

const Whitepaper = (props) => {
  return (
    <div
      className={`whitepaper-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="whitepaper-max-width thq-flex-column thq-section-max-width">
        <div className="whitepaper-content thq-flex-column">
          <ul>
            <li className="whitepaper-li list-item thq-flex-column">
              <h2 className="whitepaper-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="whitepaper-text1">
                      <span>{/*locale-text_tDWMO7*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="whitepaper-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="whitepaper-text2">
                      <span>{/*locale-text_O5z41s*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Whitepaper.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

Whitepaper.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Whitepaper
