import {SUBMIT_FORM1} from '../actions'
const initialState = {
  email: '',
  password: '',
  cpassword: ''
}

function Form1Reducer (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM1:
      return Object.assign({}, state, {
        email: action.email,
        password: action.password,
        cpassword: action.cpassword
      })

    default:
      return state
  }
}
export default Form1Reducer
