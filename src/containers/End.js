import React, {Component} from 'react'
import { bindAll } from 'lodash'
import {connect} from 'react-redux'
import store from '../store'
import {selectPage} from '../actions'
import PropTypes from 'prop-types'

class End extends Component {
  constructor (props) {
    super(props)
    bindAll(this, ['Back'])
  }

  Back (e) {
    store.dispatch(selectPage(1))
  }

  render () {
    return (
      <div className='formend form'>
        <div className='form-in' >
          <h1> Dashboard</h1>
          <div className='end_div'>
            <p>Email :<span>{this.props.Form1.email}</span></p>
            <p>Password :<span>{this.props.Form1.password}</span></p>
            <p>Conf_Password :<span>{this.props.Form1.cpassword}</span></p>
            <p>Date :<span>{this.props.Form2.getDate}</span></p>
            <p>Month :<span>{this.props.Form2.getMonth}</span></p>
            <p>Year :<span>{this.props.Form2.getFullYear}</span></p>
            <p>Gender :<span>{this.props.Form2.genderValue}</span></p>
            <p>Select :<span>{this.props.Form2.selectValue}</span></p>
          </div>
          <div className='next-div'>
            <a onClick={this.Back} className='back'>Back</a>
          </div>
        </div>
      </div>
    )
  }
}

End.propTypes = {
  Form1: PropTypes.object,
  Form2: PropTypes.object
}

function mapStateToProps (state) {
  return {
    Form1: state.Form1Reducer,
    Form2: state.Form2Reducer
  }
}

export default connect(mapStateToProps)(End)
