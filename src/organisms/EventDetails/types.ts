export interface Props {
  title: string;
  startDate: Date;
  endDate: Date;
  location: {
    place: string;
    address: string;
    city: string;
  };
}
