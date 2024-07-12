import logo from "./logo.svg";
import "./App.css";
import Game from "./component/Game";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import GameTwoStep from "./component/GameTwoStep";
import TodoList from "./component/TodoList";
import TicTapToe from "./component/TicTapToe";
import TicTapToeTwoStep from "./component/TicTapToeTwoStep";
import TypingTest from "./component/TypingTest";
import MovieRating from "./component/Movie/MovieGrade";

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

    </div>
  );
}

export default App;