import React from 'react'
import { Calendar } from './ui/calendar'


const CalendarPage = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [multipleDate, setMultipleDate] = React.useState<Date[] | undefined >([])
    const smallDate = date?.toLocaleDateString("es-ES", {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow "
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow "
                disabled={(date) => date > new Date()}
            />
            <Calendar
                mode="multiple"
                selected={multipleDate}
                onSelect={setMultipleDate}
                className="rounded-md border shadow "
            />
            <div>
                <h1 className='text-3xl'>Informacion</h1>
                <div className="border-b"></div>
                <p>{smallDate}</p>
                <p>{multipleDate?.map((date) => date.toLocaleDateString("es-ES")).join(", ")}</p>

            </div>
        </div>
    )
}

export default CalendarPage