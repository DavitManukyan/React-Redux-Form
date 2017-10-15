import React, {Component} from 'react'
import { bindAll } from 'lodash'
import store from '../store'
import {selectPage, submitForm2} from '../actions'

export default class Form1 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 3,
      errorName: 'DATE OF BIRTH',
      gender: 'GENDER',
      select: 'WHERE DID YOU HEAR ABOUT IS?',
      genderValue: '',
      selectValue: '',
      getDate: '',
      getMonth: '',
      getFullYear: '',
      err1: true,
      err2: true,
      err3: true,
      errorClas1: false,
      errorClas2: false,
      errorClas3: false
    }

    bindAll(this, ['GetDate', 'GetMonth', 'GetFullYear', 'Gender', 'Submit', 'GetSelect', 'Back'])
  }

  GetDate (date) {
    var reg = /^[0-9]{1,2}$/
    let value = date.target.value
    this.setState({getDate: value})
    if (!reg.test(value) || value < 1 || value > 31) {
      this.setState({errorName: 'Should be a number and 1-31'})
      this.setState({errorClass1: true})
      this.setState({err1: true})
      return false
    }
    this.setState({errorName: 'DATE OF BIRTH'})
    this.setState({errorClass1: false})
    this.setState({err1: false})
    return true
  }

  GetMonth (month) {
    var reg = /^[0-9]{1,2}$/
    let value = month.target.value
    this.setState({getMonth: value})
    if (!reg.test(value) || value < 1 || value > 12) {
      this.setState({errorName: ' should be a number and 01-12'})
      this.setState({errorClass1: true})
      this.setState({err2: true})
      return false
    }
    this.setState({errorName: 'DATE OF BIRTH'})
    this.setState({errorClass1: false})
    this.setState({err2: false})
    return true
  }

  GetFullYear (year) {
    var reg = /^[0-9]{4}$/
    let value = year.target.value
    this.setState({getFullYear: value})
    if (!reg.test(value) || value < 1900 || value > 1999) {
      this.setState({errorName: ' 1900 - 1999  should be a number'})
      this.setState({errorClass1: true})
      this.setState({err3: true})
      return false
    }
    this.setState({errorName: 'DATE OF BIRTH'})
    this.setState({errorClass1: false})
    this.setState({err3: false})
    return true
  }
  Gender (button) {
    let valueButton = button.target.value
    this.setState({genderValue: valueButton})
    this.setState({gender: 'GENDER'})
    this.setState({errorClass2: false})
  }

  GetSelect (select) {
    let valueSelect = select.target.value
    this.setState({selectValue: valueSelect})
    this.setState({select: 'WHERE DID YOU HEAR ABOUT IS?'})
    this.setState({errorClass3: false})
  }

  Submit (event) {
    event.preventDefault()
    let err1 = this.state.err1
    let err2 = this.state.err2
    let err3 = this.state.err3
    let gender = this.state.genderValue
    let select = this.state.selectValue
    let date = this.state.getDate
    let month = this.state.getMonth
    let year = this.state.getFullYear
    if (month.length === 1) {
      month = '0' + month
    }

    if (month === '02' && date > 29) {
      this.setState({errorName: 'Data does not exist'})
      this.setState({errorClass1: true})
      this.setState({err1: true})
      return false
    }

    if (month === '02' && date === 29) {
      var dateSearch
      for (var x = 1904; x <= year; x = x + 4) {
        if (x === year) {
          dateSearch = true
        } else {
          dateSearch = false
        }
      }

      if (!dateSearch) {
        this.setState({errorName: 'Data does not exist'})
        this.setState({errorClass1: true})
        return false
      }
    }

    if (date === '31' && (month === '02' || month === '04' || month === '06' || month === '09' || month === '11')) {
      this.setState({errorName: 'Data does not exist'})
      this.setState({errorClass1: true})
      this.setState({err1: true})
      return false
    }

    if (this.state.err1) {
      this.setState({errorClass1: true})
      this.setState({errorName: ' DATE IS REQUIRED'})
    } if (this.state.err2) {
      this.setState({errorName: ' DATE IS REQUIRED'})
      this.setState({errorClass1: true})
    } if (this.state.err3) {
      this.setState({errorName: ' DATE IS REQUIRED'})
      this.setState({errorClass1: true})
    }

    if (!gender) {
      this.setState({gender: ' GENDER IS REQUIRED'})
      this.setState({errorClass2: true})
    }

    if (!select) {
      this.setState({select: 'SELECT IS REQUIRED'})
      this.setState({errorClass3: true})
    }

    if (!err1 && !err2 && !err3 && gender && select) {
      store.dispatch(selectPage(this.state.page))
      store.dispatch(submitForm2(this.state.getDate, this.state.getMonth, this.state.getFullYear, this.state.genderValue, this.state.selectValue))
    }
  }

  Back () {
    store.dispatch(selectPage(1))
  }

  render () {
    return (
      <div className='form'>
        <form className='form-in' action=''>
          <p className='blue'>Signup</p>
          <span className='hr2 hr' />
          <p className='form-p input-date'>
            <label htmlFor='TextDate' className={this.state.errorClass1 ? 'red_error' : ''}>{this.state.errorName}</label>
          </p>
          <p className='date-of-birth clearfix'>
            <input type='text' id='TextDate' placeholder='DD' value={this.state.getDate} onChange={this.GetDate} />
            <input type='text' placeholder='MM' value={this.state.getMonth} onChange={this.GetMonth} />
            <input type='text' placeholder='YYYY' value={this.state.getFullYear} onChange={this.GetFullYear} />
          </p>

          <p className='form-p input-gender' >
            <label htmlFor='gender' className={this.state.errorClass2 ? 'red_error' : ''}>{this.state.gender}</label>
          </p>
          <p className='gender clearfix'>
            <button type='button' name='Male' value='male' onClick={this.Gender}>MALE</button>
            <button type='button' name='Famele'value='famele' onClick={this.Gender}>FEMALE</button>
            <button type='button' name='UNSPECIFIED' value='unspecified' onClick={this.Gender}>UNSPECIFIED</button>
          </p>
          <p className={this.state.errorClass3 ? 'red_error form-p input-gender' : 'form-p input-gender'}>
            {this.state.select}
          </p>
          <div className='custum-select'>
            <i className=' down icon-down-open' />
            <select required onChange={this.GetSelect}>
              <option value='N1'>N1</option>
              <option value='n2'>N2</option>
              <option value='n3'>N3</option>
            </select>
          </div>
          <div className='next-div'>
            <a onClick={this.Back} className='back'>Back</a>
            <button className='next' onClick={this.Submit}>Next
              <i className='icon-right-big' />
            </button>
          </div>
        </form>
      </div>
    )
  }
}
