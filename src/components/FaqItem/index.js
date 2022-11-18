import {Component} from 'react'

import './index.css'

const PLUS = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    const {isActive} = this.props
    const image = isActive ? MINUS : PLUS
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.state
    const {questionText} = faqDetails

    return (
      <li className="faq-items">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
