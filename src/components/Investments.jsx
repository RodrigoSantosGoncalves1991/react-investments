import Investment from './Investment';

export default function Investments({ children: investment = null }) {
  const { description, monthlyReports } = investment;
  const { value: initialAmount } = monthlyReports.find(
    report => report.month === 1
  );
  const { value: finalAmount } = monthlyReports.find(
    report => report.month === 12
  );
  let totalIncome = finalAmount - initialAmount;
  // prettier-ignore
  const totalIncomePercentage = parseFloat(Math.abs(((finalAmount - initialAmount) / initialAmount) * 100).toFixed(2));
  let textColor = totalIncome > 0 ? 'text-green-600' : 'text-red-600';
  let percentSign = totalIncome > 0 ? '+' : '-';
  // prettier-ignore
  const _totalIncome = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL',}).format(Math.abs(totalIncome));
  monthlyReports.sort((a, b) => {
    return a.month - b.month;
  });
  return (
    <div className="border p-2 m-2 rounded">
      <div className="mx-auto p-2">
        <h1 className="text-center font-semibold text-2xl">{description}</h1>
      </div>
      <div>
        <h2 className="text-center font-semibold text-xl p-2">
          Rendimento total: {/* prettier-ignore */}
          <span className={`${textColor}`}>{`${_totalIncome} 
          (${percentSign}${totalIncomePercentage.toLocaleString('pt-BR')} %)`}</span>
        </h2>
      </div>
      <div className="divide-y">
        {monthlyReports.map((report, index) => {
          // prettier-ignore
          let investmentData = {currentAmount: report.value, month: report.month, year: report.year}
          // prettier-ignore
          let _previousAmount = monthlyReports[index - 1] ? monthlyReports[index - 1].value : undefined;
          // prettier-ignore
          investmentData = {...investmentData, previousAmount: _previousAmount};
          //console.log(investmentData);
          return <Investment key={report.id}>{investmentData}</Investment>;
        })}
      </div>
    </div>
  );
}
