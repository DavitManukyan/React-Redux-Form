import 'assets/css/style.scss'
import React, {Component} from 'react'
import Form1 from 'components/Form1'
import Form2 from 'components/Form2'
import Form3 from 'components/Form3'
import End from 'components/End'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Webpage extends Component {
  render () {
    let page = this.props.PageRender.page

    if (page === 1) {
      return <Form1 />
    } else if (page === 2) {
      return <Form2 />
    } else if (page === 3) {
      return <Form3 />
    } else if (page === 4) {
      return <End />
    }
  }
}

Webpage.propTypes = {
  PageRender: PropTypes.object
}

function mapStateToProps (state) {
  return {
    PageRender: state.PageRender
  }
}
export default connect(mapStateToProps)(Webpage)
