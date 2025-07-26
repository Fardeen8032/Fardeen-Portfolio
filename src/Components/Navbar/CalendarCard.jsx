import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import { format, isSunday } from 'date-fns';
import "react-day-picker/dist/style.css";

export default function CalendarCard() {

    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);
    var dates;
    const holidayModifiers = {
        isHoliday: dates,
        isSunday: (date) => isSunday(date),
    };

    const holidayModifiersStyles = {
        isHoliday: {
            backgroundColor: '#a5eb34',
            color: 'black',
            fontWeight: 'bold'
        },
        isSunday: {
            // backgroundColor: 'red', // Mark Sundays as red
            color: 'red',
            fontWeight: 'bold', // Make the font size bold
        },
    };

    const footer = selectedDay ? (
        <p className='base-font-muli fw-bold text-base-color fs-6 mb-0  pt-3 text-center'>🌤 Today Date {format(selectedDay, 'PPP')}</p>
    ) : (
        <p>Please pick a day.</p>
    );
    return (
        <div className="meeting-box-main py-1 rounded-5 shadow" style={{ right: "4%" }} >
            <div className="Todo-lists-main p-2 px-1 pb-0">
                <DayPicker
                    mode="single"
                    required
                    selected={selectedDay}
                    onSelect={setSelectedDay}
                    footer={footer}
                    modifiers={holidayModifiers}
                    modifiersStyles={holidayModifiersStyles}
                />
            </div>
        </div>
    );
}
