import React, {Component} from 'react'
import { bindAll } from 'lodash'
import {submitForm1, selectPage} from '../actions'
import store from '../store'

export default class Form1 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 2,
      email: '',
      password: '',
      cpassword: '',
      error_Email: 'EMAIL',
      error_password: 'PASSWORD',
      error_cpassword: 'PASSWORD CONFIRM',
      err: true,
      err1: true,
      err2: true,
      errorClass: false,
      errorClass2: false,
      errorClass3: false

    }

    bindAll(this, ['changeEmail', 'changePassword', 'changeConfirmPassword', 'submit'])
  }
  changeEmail (email) {
    this.setState({email: email.target.value})
    var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    var address = email.target.value
    if (email === '') {
      this.setState({error_Email: 'Email should be required'})
      this.setState({errorClass: true})
      this.setState({err: true})
      return false
    }
    if (reg.test(address) === false) {
      this.setState({error_Email: 'Email should be a valid email address'})
      this.setState({errorClass: true})
      this.setState({err: true})
      return false
    }
    this.setState({error_Email: 'EMAIL'})
    this.setState({errorClass: false})
    this.setState({err: false})
    return true
  }

  changePassword (password) {
    this.setState({password: password.target.value})
    if (password.target.value === '') {
      this.setState({error_password: 'PASSWORD IS REQUIRED'})
      this.setState({errorClass2: true})
      this.setState({err1: true})

      return false
    }
    if (password.target.value.length <= 5) {
      this.setState({error_password: 'Minimum 6 characters long'})
      this.setState({errorClass2: true})
      this.setState({err1: true})
      return false
    }
    this.setState({error_password: 'PASSWORD'})
    this.setState({errorClass2: false})
    this.setState({err1: false})

    return true
  }
  changeConfirmPassword (cpassword) {
    this.setState({cpassword: cpassword.target.value})
    let passwoed1 = this.state.password
    let password2 = cpassword.target.value

    if (passwoed1 !== password2) {
      this.setState({error_cpassword: 'Password confirmation should match the password'})
      this.setState({errorClass3: true})
      this.setState({err2: true})
      return false
    }
    this.setState({error_cpassword: 'PASSWORD CONFIRM'})
    this.setState({err2: false})
    this.setState({errorClass3: false})
    return true
  }

  submit (event) {
    event.preventDefault()
    let err = this.state.err
    let err1 = this.state.err1
    let err2 = this.state.err2
    let email = this.state.email

    if (email === '') {
      this.setState({error_Email: 'EMAIL IS REQUIRED'})
    }
    if (email === '') {
      this.setState({error_password: 'PASSWORD IS REQUIRED'})
    }
    if (email === '') {
      this.setState({error_cpassword: 'CONFIRM PASSWORD IS REQUIRED'})
    }

    if (!err && !err1 && !err2) {
      store.dispatch(selectPage(this.state.page))
      store.dispatch(submitForm1(this.state.email, this.state.password, this.state.cpassword))
    } else {
      if (this.state.err) {
        this.setState({errorClass: true})
      } if (this.state.err1) {
        this.setState({errorClass2: true})
      } if (this.state.err2) {
        this.setState({errorClass3: true})
      }
    }
  }

  render () {
    return (
      <div className='form'>
        <form className='form-in' action=''>
          <p className='blue'>Signup</p>
          <span className='hr1 hr' />
          <p className='form-p'>
            <label htmlFor='F_emaill' className={this.state.errorClass ? 'red_error' : ''} >{this.state.error_Email}</label>
            <input type='email' name='email' id='F_email' value={this.state.email} onChange={this.changeEmail} />
          </p>
          <p className='form-p'>
            <label htmlFor='F_password' className={this.state.errorClass2 ? 'red_error' : ''}>{this.state.error_password}</label>
            <input type='password' name='F_password' id='F_password' value={this.state.password} onChange={this.changePassword} />
          </p>
          <p className='form-p'>
            <label htmlFor='c-password' className={this.state.errorClass3 ? 'red_error' : ''} >{this.state.error_cpassword}</label>
            <input type='password' name='c_password' id='c_password' value={this.state.cpassword} onChange={this.changeConfirmPassword} />
          </p>
          <div className='next-div'><button className='next' onClick={this.submit}>Next<i className='icon-right-big' /></button></div>
        </form>
      </div>
    )
  }
}
