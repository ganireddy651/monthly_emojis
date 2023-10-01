import './index.css'

const DatesList = props => {
  const {eachDate, onClickDateButton} = props
  const {id, date, emojiUrl, emojiName} = eachDate

  const onDate = () => {
    onClickDateButton(emojiUrl, id)
  }

  return (
    <li className="dates-list">
      <button type="button" className="date-button" onClick={onDate}>
        <span>{date}</span>
        <img src={emojiUrl} alt={emojiName} className="date-emoji" />
      </button>
    </li>
  )
}

export default DatesList
