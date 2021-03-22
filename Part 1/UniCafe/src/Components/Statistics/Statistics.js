import { Items } from "./Items";

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = good * 1 + bad * -1;
  const positive = `${((good / total) * 100).toFixed(2)}%`;
  return (
    <div>
      <h1>Feedback Statistics</h1>
      {total > 0 && (
        <div>
          <table>
            <tbody>
              <Items name={"Good"} item={good} />
              <Items name={"Neutral"} item={neutral} />
              <Items name={"Bad"} item={bad} />
              <Items name={"Total"} item={total} />
              <Items name={"Average"} item={average} />
              <Items name={"Positive"} item={positive} />
            </tbody>
          </table>
        </div>
      )}
      {total === 0 && (
        <div>
          <p>There is no feedback, rate please!</p>
        </div>
      )}
    </div>
  );
};
