import './index.css'

const EmojiList = props => {
  const {eachEmoji} = props

  const {id, emojiName, emojiUrl} = eachEmoji

  return (
    <li className="emoji-button-list">
      <button type="button" className="emoji-button">
        <p className="emoji-name">{emojiName}</p>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiList
