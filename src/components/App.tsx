import * as React from 'react';
import { getCalendarData, CalendarType } from './api';
import { InfoForDayFacade } from './InfoForDayFacade';
import { Layout } from './layout/Layout';
import copy from '../consts/copy';

export function App() {
  const [loading, setLoading] = React.useState(false);
  const [calendar, setCalendar] = React.useState<CalendarType>();

  React.useEffect(() => {
    async function initialize() {
      setLoading(true);
      const data = await getCalendarData();

      setLoading(false);
      setCalendar(data);
    }

    initialize();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex h-32 justify-center items-center">
          {copy.loading}
        </div>
      </Layout>
    );
  }

  if (calendar) {
    return (
      <Layout>
        <InfoForDayFacade calendar={calendar} />
      </Layout>
    );
  }

  return null;
}
