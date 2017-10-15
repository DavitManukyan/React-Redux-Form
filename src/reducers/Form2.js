import {SUBMIT_FORM2} from '../actions'
const initialState = {
  getDate: '',
  getMonth: '',
  getFullYear: '',
  genderValue: '',
  selectValue: ''
}

function Form2Reducer (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM2:
      return Object.assign({}, state, {
        getDate: action.getDate,
        getMonth: action.getMonth,
        getFullYear: action.getFullYear,
        genderValue: action.genderValue,
        selectValue: action.selectValue
      })
    default:
      return state
  }
}
export default Form2Reducer
