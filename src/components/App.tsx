import * as React from 'react';
import { getCalendarData, CalendarType } from './api';
import { getDataForDay } from '../utils/date';
import { InfoForToday } from './InfoForToday';
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
    // TODO allow switching between days
    const todayData = getDataForDay(calendar);
    return todayData ? (
      <Layout>
        <InfoForToday data={todayData} />
      </Layout>
    ) : (
      <Layout>{copy.notToday}</Layout>
    );
  }

  return null;
}
