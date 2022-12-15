import * as React from 'react';
import { getCalendarData, CalendarType } from './api';

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
    return <div>loading</div>;
  }

  if (calendar) {
    return (
      <div className="bg-green-100"> {JSON.stringify(calendar)}</div>
    );
  }

  return null;
}
