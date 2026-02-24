import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomDatePicker() {
    const [date, setDate] = useState<Date | null>(null);
    const datePickerRef = useRef<DatePicker>(null);

    return (
        <div className="d-flex align-items-center input-field date-select pointer">
            <DatePicker
                ref={datePickerRef}
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                placeholderText="Select Date"
                className="no-border"
            />

            <FaRegCalendarAlt
                className="pointer calender-icon"
                onClick={() => datePickerRef.current?.setOpen(true)}
            />
        </div>
    );
}
