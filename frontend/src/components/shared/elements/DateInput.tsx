import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateInputProps } from "../../../types/DateInputProps ";

export default function DateInput({ placeholder = "Select date" }: DateInputProps) {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            placeholderText={placeholder}
            dateFormat="dd/MM/yyyy"
            wrapperClassName="max-w-lg w-full"
            className={`form-input max-w-lg w-full px-4 py-3 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground-light dark:text-foreground-dark placeholder:text-foreground-light/60 dark:placeholder:text-foreground-dark/60`}
            withPortal
        />
    );
}

