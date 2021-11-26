import Investments from './components/Investments';

import { investmentsWithReports } from './data/backend';

export default function App() {
  console.log(investmentsWithReports);
  return (
    <div>
      <header>
        <div className="bg-blue-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            react-investments v1.0.1
          </h1>
        </div>
      </header>
      {investmentsWithReports.map(investment => {
        return <Investments key={investment.id}>{investment}</Investments>;
      })}
    </div>
  );
}
