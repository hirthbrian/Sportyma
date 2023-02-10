import trainig1 from "./../data/training_1.json";
import trainig2 from "./../data/training_2.json";

const data = [trainig1, trainig2] as unknown as EventType[];

interface EventType {
  id: number;
  startdate: Date;
  enddate: Date;
  title: string;
  participation: string | null;
  location: {
    place: string;
    address: string;
    city: string;
  };
  information: string | null;
}

export const loadEventData = () => data;

export const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
