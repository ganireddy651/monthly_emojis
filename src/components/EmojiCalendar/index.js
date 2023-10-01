import React, {Component} from 'react'
import './index.css'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
  },
]

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
  },
]

class EmojiCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeEmoji: emojisList[0], // Initially, the first emoji is active
      selectedDay: 'Sun', // Initially, 'Sun' is selected
      datesList: initialDatesList,
    }
  }

  handleEmojiClick = emoji => {
    this.setState({activeEmoji: emoji})
  }

  handleDayClick = day => {
    const {datesList, activeEmoji} = this.state
    const updatedDatesList = [...datesList]

    const dateItem = updatedDatesList.find(item => item.date === day)

    if (!dateItem) {
      // If there's no emoji in the date item, set the active emoji
      updatedDatesList.push({date: day, emojiName: activeEmoji.emojiName})
    } else if (dateItem.emojiName !== activeEmoji.emojiName) {
      // If the emoji in the date item is different from the active emoji, replace it
      dateItem.emojiName = activeEmoji.emojiName
    } else {
      // If the emoji in the date item is the same as the active emoji, remove it
      const index = updatedDatesList.indexOf(dateItem)
      updatedDatesList.splice(index, 1)
    }

    this.setState({datesList: updatedDatesList, selectedDay: day})
  }

  render() {
    const {activeEmoji, selectedDay, datesList} = this.state

    return (
      <div>
        <div className="emoji-selector">
          <h3>Emojis:</h3>
          <div className="emoji-list">
            {emojisList.map(emoji => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={emoji.id}
                className={`emoji ${
                  activeEmoji === emoji ? 'active' : 'normal'
                }`}
                onClick={() => this.handleEmojiClick(emoji)}
              >
                <img src={emoji.emojiUrl} alt={emoji.emojiName} />
                <p>{emoji.emojiName}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="calendar">
          <h3>Calendar:</h3>
          <div className="days">
            {daysList.map(day => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={day.id}
                className={`day ${selectedDay === day.day ? 'selected' : ''}`}
                onClick={() => this.handleDayClick(day.day)}
              >
                {day.day}
              </div>
            ))}
          </div>
          <div className="dates">
            {datesList.map(dateItem => (
              <div key={dateItem.date} className="date">
                {dateItem.date}
                {dateItem.emojiName && (
                  <img
                    src={
                      emojisList.find(
                        emoji => emoji.emojiName === dateItem.emojiName,
                      ).emojiUrl
                    }
                    alt={dateItem.emojiName}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiCalendar
