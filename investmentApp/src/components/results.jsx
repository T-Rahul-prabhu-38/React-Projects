import { calculateInvestmentResults, formatter } from '../util/investment.js';

const results = [];

export default function Results({ input }) {
  calculateInvestmentResults(input, results);

  if (results.length === 0) {
        const initialInvestment = 0; // Or any default value

    return <p className="center">Invalid input data provided.</p>
  }
  else{
    const initialInvestment = results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment?.initialInvestment;

  }
//   const initialInvestment =
//     results[0].valueEndOfYear -
//     results[0].interest -
//     results[0].annualInvestment;

// const initialInvestment = results[0]?.annualInvestment?.initialInvestment || 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}