import { DateTime } from 'luxon';
import type { CalendarDayType, CalendarType } from '../consts/types';


export type CalendarDataType = Readonly<
  {
    prettyDate: string;
  } & CalendarDayType
>;

export const getCurrentDate = () => {

  let dateNow = DateTime.now();
  const dayOfWeek = dateNow.toLocaleString(
    { weekday: 'long' },
    { locale: 'pl-pl' },
  );
  const isSundayEve = dayOfWeek === 'sobota' && dateNow.hour >= 15;

  if (isSundayEve) {
    dateNow = dateNow.plus({ days: 1 });
  }

  return {
    dayOfWeek: isSundayEve ? 'niedziela' : dayOfWeek,
    isSundayEve,
    isoDate: dateNow.toFormat('yyyy-LL-dd'),
    prettyDate: dateNow.setLocale('pl').toLocaleString(DateTime.DATE_HUGE),
  };
};

export const getDataForDay = (calendar: CalendarType): CalendarDataType | null => {
  const { isoDate, prettyDate } = getCurrentDate();
  const currentCalendarItem = calendar.find(item => item.date === isoDate);

  return currentCalendarItem ? { ...currentCalendarItem, prettyDate } : null;
};

export const formatDate = (date: string) => {
  const dateTime = DateTime.fromISO(date);

  return dateTime.isValid
    ? dateTime.setLocale('pl').toLocaleString({ day: 'numeric', month: 'long' })
    : null;
};
