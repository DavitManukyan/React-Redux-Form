import {combineReducers} from 'redux'
import Form1Reducer from './Form1'
import Form2Reducer from './Form2'
import PageRender from './Page'

const allReducers = combineReducers({
  Form1Reducer: Form1Reducer,
  Form2Reducer: Form2Reducer,
  PageRender: PageRender
})

export default allReducers
