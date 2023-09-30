import './index.css'

const DatesList = props => {
  const {eachDate} = props
  const {id, date, emojiUrl, emojiName} = eachDate

  return (
    <li className="dates-list">
      <button type="button" className="date-button">
        <span>{date}</span>
      </button>
      <img src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default DatesList
