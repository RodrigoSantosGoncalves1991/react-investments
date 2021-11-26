import Money from './Money';
import Month from './Month';
import Percentage from './Percentage';

export default function Investment({ children: investmentData = null }) {
  // prettier-ignore
  const amounts = {initialAmount: investmentData.previousAmount, finalAmount: investmentData.currentAmount};
  const date = { month: investmentData.month, year: investmentData.year };
  return (
    <li className="flex flex-row items-center justify-start space-x-8">
      <span className="font-mono">
        <Month>{date}</Month>
      </span>
      <span className="flex-grow">
        <Money>{amounts}</Money>
      </span>
      <span>
        <Percentage>{amounts}</Percentage>
      </span>
    </li>
  );
}
