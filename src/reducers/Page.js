import {SELECT_PAGE} from '../actions'
const initialState = {
  page: 1

}

function PageRender (state = initialState, action) {
  switch (action.type) {
    case SELECT_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })

    default:
      return state
  }
}
export default PageRender
