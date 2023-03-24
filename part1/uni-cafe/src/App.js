import { useState } from "react";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleBad = () => setBad(bad + 1);
  const handleNeutral = () => setNeutral(neutral + 1);

  return (
    <div>
      <Statistics
        props={{
          good,
          neutral,
          bad,
          handleGood,
          handleBad,
          handleNeutral,
        }}
      />
    </div>
  );
};

export default App;
