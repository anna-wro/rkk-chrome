export type SeasonType =
  | 'ordinary'
  | 'advent'
  | 'christmas'
  | 'lent'
  | 'pascha'
  | 'easter'
  | 'pentecost';

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


export type CalendarType = ReadonlyArray<CalendarDayType>;
