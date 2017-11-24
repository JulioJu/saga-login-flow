import React from 'react'
import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator'

function LoadingButton (props) {
  return (
    <button href='#' className={props.className + ' btn btn--loading'} disabled='true'>
      <LoadingIndicator />
    </button>
  )
}

LoadingButton.propTypes = {
  className: PropTypes.string
}

export default LoadingButton
