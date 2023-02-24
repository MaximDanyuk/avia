/*eslint-disable */
export const getTicketTargetTime = (
  date: string,
  duration: number,
) => {
  const datefrom = new Date(date);

  const dateTo = new Date(
    datefrom.getMilliseconds() + duration * 60000,
  );

  return `${
    datefrom.getUTCHours() < 10
      ? `0${datefrom.getUTCHours()}`
      : datefrom.getUTCHours()
  }:${
    datefrom.getUTCMinutes() < 10
      ? `0${datefrom.getUTCMinutes()}`
      : datefrom.getUTCMinutes()
  }
- ${
    dateTo.getUTCHours() < 10
      ? `0${dateTo.getUTCHours()}`
      : dateTo.getUTCHours()
  }:${
    dateTo.getUTCMinutes() < 10
      ? `0${dateTo.getUTCMinutes()}`
      : dateTo.getUTCMinutes()
  }    
    `;
};

export const getMinetsToHours = (minets: number) => {
  const hours = Math.floor(minets / 60);
  const min = minets % 60;
  const totalHours = String(hours).length < 2 ? `0${hours}` : hours;
  const totalMinets = String(min).length < 2 ? `0${min}` : min;

  return `${totalHours}ч ${totalMinets}м`;
};
