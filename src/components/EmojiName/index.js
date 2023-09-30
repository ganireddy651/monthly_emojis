import './index.css'

const EmojiName = props => {
  const {eachName} = props
  const {emojiName} = eachName

  return <option>{emojiName}</option>
}

export default EmojiName
