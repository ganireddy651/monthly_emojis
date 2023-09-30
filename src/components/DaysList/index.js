import './index.css'

const DaysList = props => {
  const {eachDay} = props
  const {id, day} = eachDay

  return (
    <li className="days-list">
      <p className="days">{day}</p>
    </li>
  )
}

export default DaysList
