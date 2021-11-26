export default function Money({ children: amounts = null }) {
  if (!amounts) {
    return <div>Impossível renderizar valor</div>;
  }
  const { initialAmount, finalAmount } = amounts;
  const totalIncome = finalAmount - initialAmount;
  //prettier-ignore
  let textColor = totalIncome > 0 ? 'text-green-600' : 'text-red-600';
  textColor = initialAmount ? textColor : 'text-gray-600';
  //prettier-ignore
  const number = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL',}).format(finalAmount);
  return (
    <span className={`${textColor}`}>
      <strong>{`${number}`}</strong>
    </span>
  );
}
