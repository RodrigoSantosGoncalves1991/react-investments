export default function Percentage({ children: amounts = null }) {
  if (!amounts) {
    return <div>Impossível renderizar valor</div>;
  }
  const { initialAmount, finalAmount } = amounts;
  //prettier-ignore
  let totalIncomePercentage = ((finalAmount - initialAmount) / initialAmount) * 100;
  //prettier-ignore
  let textColor = totalIncomePercentage > 0 ? 'text-green-600' : 'text-red-600'
  let percentSign = totalIncomePercentage > 0 ? '+' : '-';
  textColor = initialAmount ? textColor : 'text-gray-600';
  percentSign = initialAmount ? percentSign : '';
  totalIncomePercentage = initialAmount ? totalIncomePercentage : 0.0;
  console.log(totalIncomePercentage);
  //prettier-ignore
  const number = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2,}).format(Math.abs(totalIncomePercentage));
  return (
    <span className={`${textColor}`}>
      <strong>{`${percentSign}${number} %`}</strong>
    </span>
  );
}
