import { MESSAGE } from '../consts';

export type SeasonType =
  | 'ordinary'
  | 'advent'
  | 'christmas'
  | 'lent'
  | 'pascha'
  | 'easter'
  | 'pentecost';

export type CalendarType = ReadonlyArray<CalendarDayType>;

export type CalendarDayType = Readonly<{
  date: string;
  week: 1 | 2;
  season: SeasonType;
  holidays?: string[];
  variant?: 1 | 2;
  links?: ReadonlyArray<{
    name: string;
    slug: string;
  }>;
  linksTitle?: string;
  notes?: string[];
  passages?: string[];
  lauds?: {
    sigla?: string;
    passage?: string;
    antiphon?: string;
  };
  vespers?: {
    sigla?: string;
    passage?: string;
    antiphon?: string;
  };
  eve?: {
    antiphon?: string;
  };
}>;

export async function getCalendarData() {
  const data = await chrome.runtime.sendMessage({
    type: MESSAGE.GET_CALENDAR_DATA,
  });

  return data as unknown as Promise<CalendarType>;
}
