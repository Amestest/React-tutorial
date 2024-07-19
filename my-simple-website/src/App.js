
import "./App.css";
import Game from "./component/Game";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/Layout/NavBar";
import Footer from "./component/Layout/Footer";
/*
Module not found ====> 에러가 발생한 파일 위치 App.js에서 해당 파일 위치 찾을 수 없음이라는 에러 발생
ERROR in ====> 에러가 발생한 파일 위치
*/
import Header from "./component/Layout/Header";
import GameTwoStep from "./component/GameTwoStep";
import TodoList from "./component/TodoList";
import TicTapToe from "./component/TicTapToe/TicTapToe";
import TicTapToeTwoStep from "./component/TicTapToe/TicTapToeTwoStep";
import TypingTest from "./component/TypingTest";
import MovieRating from "./component/Movie/MovieGrade";
import './css/Home.css';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes> {/*링크 모음 예전에는 Switch 라고 작성했지만 v6부터 Routes 이름 사용*/}
        <Route path="/"     element=  {   <Home />   } />
        <Route path="/game" element=  {   <Game />   } />
        <Route path="/gametwostep" element={<GameTwoStep/>}/>
        <Route path="/todolist" element={<TodoList/>}/>
        <Route path="/tictaptoe" element={<TicTapToe/>}/>
        <Route path="/tictaptoetwostep" element={<TicTapToeTwoStep/>}/>
        <Route path="/typingtest" element={<TypingTest/>}/>
       
        <Route path="/movieRating" element={<MovieRating/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;