import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Nav from './common/Nav'

class App extends Component {
  render () {
    return (
      <div>
        <Nav loggedIn={this.props.data.loggedIn}
          currentlySending={this.props.data.currentlySending}
          history={this.props.history}
          dispatch={this.props.dispatch}
          location={this.props.location} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  children: PropTypes.object,
  dispatch: PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(App)
