import './index.css'

const EmojiList = props => {
  const {eachEmoji, isActive, activeEmoji} = props
  console.log(isActive)

  const {id, emojiName, emojiUrl} = eachEmoji

  const activeEmojiButton = () => {
    activeEmoji(id)
  }

  const activeButton = isActive ? 'button-active' : 'emoji-button'

  const activeEmojiName = isActive ? 'active-name' : 'emoji-name'

  return (
    <li className="emoji-button-list">
      <button
        type="button"
        className={`${activeButton}`}
        onClick={activeEmojiButton}
      >
        <p className={activeEmojiName}>{emojiName}</p>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiList
