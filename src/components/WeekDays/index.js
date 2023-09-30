import './index.css'

const WeekDays = props => {
  const {weekDays} = props
  const {day} = weekDays

  return <option>{day}</option>
}

export default WeekDays
