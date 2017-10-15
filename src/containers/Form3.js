import React, {Component} from 'react'
import { bindAll } from 'lodash'
import store from '../store'
import {selectPage} from '../actions'

export default class Form3 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 4
    }
    bindAll(this, ['Next'])
  }

  Next (e) {
    store.dispatch(selectPage(this.state.page))
  }

  render () {
    return (
      <div className='form'>
        <form className='form-in' >
          <p className='blue'>Thank you</p>
          <span className='hr3 hr' />
          <p className='ok'>
            <i className='icon-ok' />
          </p>
          <a className='go ' onClick={this.Next}>Go to Dashboard<i className='icon-right-big' /></a>
        </form>
      </div>
    )
  }
}
