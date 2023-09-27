import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      useState פונקציה למעקב אחר צעדים עם
      <div>
        <br></br>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>צעדים: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        useState פונקציה הבאה נשתמש ב<br></br>
        הקודם שיכיל את משפר הצעדים לחישובה התאריך
        <br></br>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>לספור: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "היום הוא "
            : count > 0
            ? `${count} ימים מהתאריך `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
