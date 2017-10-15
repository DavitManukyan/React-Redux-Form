export const SUBMIT_FORM1 = 'SUBMIT_FORM1'
export const SUBMIT_FORM2 = 'SUBMIT_FORM2'
export const SELECT_PAGE = 'SELECT_PAGE '

export function submitForm1 (email, password, cpassword) {
  return {
    type: SUBMIT_FORM1,
    email,
    password,
    cpassword
  }
}

export function submitForm2 (getDate, getMonth, getFullYear, genderValue, selectValue) {
  return {
    type: SUBMIT_FORM2,
    getDate,
    getMonth,
    getFullYear,
    genderValue,
    selectValue
  }
}

export function selectPage (page) {
  return {
    type: SELECT_PAGE,
    page

  }
}
