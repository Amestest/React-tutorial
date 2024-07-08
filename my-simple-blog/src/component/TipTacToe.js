import React, {useEffect, useState } from 'react';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] =useState(1) //부터시작
  const [message, setMessage] =useState([]) //빈공간으로 놓기

  const handleNumberClick = (                   ) => {
    if (          ===              ) {
      if (                            === 9) { 
        맞추면 메세지내용 맞췄습니다.! 로 변경하기
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
     틀렸을경우 메세지 보여주기
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    번호초기화 
메세지 초기화
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTap</h1>
      <div className="grid">
        {                          .                                ((                            ) => (
          <button key={                           } onClick={() =>                      (        )} className="number-button">
            {                  }
          </button>
        ))}
      </div>
      <p className="message">{          }</p>
      <button onClick={         } className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
