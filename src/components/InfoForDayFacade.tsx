import { useState } from 'react';
import { DateTime } from 'luxon';
import { InfoForDay } from './InfoForDay';
import { CalendarType } from './api';
import { getDataForDay } from '../utils/date';
import copy from '../consts/copy';

export function InfoForDayFacade({ calendar }: { calendar: CalendarType }) {
  const [daysOffset, setDaysOffset] = useState(0);
  const dateToCheck = DateTime.now().plus({ days: daysOffset });

  const dataToDisplay = getDataForDay({ calendar, date: dateToCheck });

  return dataToDisplay ? (
    <div>
      <InfoForDay
        data={dataToDisplay}
        controls={
          <div>
            <div
              className="inline-block cursor-pointer select-none px-2"
              onClick={() => setDaysOffset(daysOffset - 1)}
            >
              ❮
            </div>
            <div
              className="inline-block cursor-pointer select-none px-2"
              onClick={() => setDaysOffset(daysOffset + 1)}
            >
              ❯
            </div>
          </div>
        }
      />
    </div>
  ) : (
    <>{copy.notToday}</>
  );
}
