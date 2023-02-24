export interface ITicketTemplate {
  from: string;
  to: string;
  stops?: string | null;
  stopsCount?: number | null;
  fromTime: string;
  duration: number;
  toTime: Date;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

export interface Isegments {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}
export interface TicketProps {
  price: number;
  carrier: string;
  segments: Isegments[];
}
