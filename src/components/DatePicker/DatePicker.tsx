import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './DatePicker.module.css';

import Input from '../ui/input/input.tsx';

type CalendarValue = Date | [Date, Date] | null;

const DatePicker = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleDateChange = (value: CalendarValue) => {
    if (value instanceof Date) {
      setDate(value);
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.datePicker} ref={ref}>
      <Input
        type='text'
        label='Дата рождения'
        readOnly
        value={date ? date.toLocaleDateString('ru-RU') : ''}
        placeholder='дд.мм.гггг'
        onClick={() => setShowCalendar(!showCalendar)}
        className={styles.dateInput}
        rightIcon={<img src='/icons/calendar.svg' alt='calendar' />}
      />

      {showCalendar && (
        <div className={styles.calendarWrapper}>
          <Calendar
            // @ts-ignore
            onChange={handleDateChange}
            value={date}
            selectRange={false}
            locale='ru-RU'
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
          />
          <div className={styles.calendarButtons}>
            <button
              className={styles.cancelBtn}
              onClick={() => setShowCalendar(false)}
            >
              Отменить
            </button>
            <button
              className={styles.confirmBtn}
              onClick={() => setShowCalendar(false)}
            >
              Выбрать
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
