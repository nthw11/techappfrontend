import React, { useState } from 'react'
import Calendar from 'react-calendar'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'
import './Scheduling.css'
const CalendarBlock = () => {
  const { register } = useForm()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <div className='calendarBlock'>
      <h1>Calendar</h1>
      <div>
        <h2>
          {startDate.toLocaleDateString()} - {endDate?.toLocaleDateString()}
        </h2>
      </div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </div>
  )
}

export default CalendarBlock
