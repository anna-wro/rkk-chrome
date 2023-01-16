import { ExtendedInfo } from './ExtendedInfo';
import { CalendarDataType } from '../utils/date';
import { makeStartCase } from '../utils/text';

export function InfoForToday({ data }: { data: CalendarDataType }) {
  console.log({ data });
  return (
    <div className="font-light md:mb-4 mt-3 text-sm more-info">
      <div className="md:flex justify-between items-center">
        <div>
          <div className="font-medium">{makeStartCase(data.prettyDate)}</div>
          {data?.holidays?.map((holiday) => (
            <div className="font-bold" key={holiday}>
              {holiday.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <ExtendedInfo data={data} />
    </div>
  );
}
