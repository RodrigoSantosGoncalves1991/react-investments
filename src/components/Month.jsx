export default function Month({ children: date }) {
  const { month, year } = date;
  //prettier-ignore
  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return <span>{`${months[month - 1]}/${year}`}</span>;
}
