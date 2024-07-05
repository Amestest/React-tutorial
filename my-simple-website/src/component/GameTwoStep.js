import React, { useState } from "react";

const GameTwoStep = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState(Math.floor(Math.random() * 30) + 1);
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);
    if (userGuess === number) {
      setMessage("딩동댕~ 정답입니다.");
    } else if (userGuess > number) {
      setMessage("숫자가 큽니다.");
    } else {
      setMessage("숫자가 작습니다.");
    }
    setGuess('');
  };
  const handleRestart = (e) => {};
  return (
    <div>
      <h1>서른고개</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleChange}
          placeholder="1에서 30사이의 숫자 입력하기"
        />
        <button type="submit">추측하기</button>
      </form>
      <p>{message}</p>
      <button onClick={handleRestart}>다시하기</button>
    </div>
  );
};
export default GameTwoStep;
