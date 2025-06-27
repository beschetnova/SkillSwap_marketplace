import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './DatePicker.module.css';

import Input from '../ui/input/input.tsx';
import Button from '../ui/buttons/button.tsx';

type CalendarValue = Date | [Date, Date] | null;

const DatePicker = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeStartDate, setActiveStartDate] = useState(new Date(2000, 3, 1));
  const ref = useRef<HTMLDivElement>(null);

  const handleDateChange = (value: CalendarValue) => {
    if (value instanceof Date) {
      setDate(value);
      setShowCalendar(false);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = new Date(activeStartDate);
    newDate.setMonth(Number(e.target.value));
    setActiveStartDate(newDate);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = new Date(activeStartDate);
    newDate.setFullYear(Number(e.target.value));
    setActiveStartDate(newDate);
  };

  const navigationLabel = ({
    date,
    locale
  }: {
    date: Date;
    locale: string;
  }) => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const months = [...Array(12).keys()].map((m) =>
      new Date(0, m).toLocaleString(locale, { month: 'long' })
    );
    const years = Array.from({ length: 30 }, (_, i) => currentYear - 15 + i);

    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <select value={currentMonth} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option value={index} key={index}>
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </option>
          ))}
        </select>
        <select value={currentYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
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
            showNeighboringMonth={true}
            // @ts-ignore
            onChange={handleDateChange}
            value={date}
            selectRange={false}
            locale='ru-RU'
            next2Label={null}
            prev2Label={null}
            className={styles.calendar}
            navigationLabel={navigationLabel}
            onActiveStartDateChange={({ activeStartDate }) =>
              setActiveStartDate(activeStartDate)
            }
            // defaultView='month' // Показываем вид месяца
            activeStartDate={activeStartDate}
          />
          <div className={styles.calendarButtons}>
            <Button
              type='secondary'
              className={styles.cancelBtn}
              onClick={() => setShowCalendar(false)}
            >
              Отменить
            </Button>
            <Button
              type='primary'
              className={styles.confirmBtn}
              onClick={() => setShowCalendar(false)}
            >
              Выбрать
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
