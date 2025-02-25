import React from "react";
import '../css/Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>이력서 및 포트폴리오</h1>
        <p>환영합니다! 아래에서 지원 스킬과 포트폴리오를확인 하실 수 있습니다.</p>
      </header>

      {/******** 소개 섹션 part1과 part2가 존재 **********/}
      {/* part 1 : 사진을 넣지 않고 소개만 작성하는 about*/}
      <section className="home-about-one">
        <h2>소개</h2>
        <p>안녕하십니까? 한승수 입니다. KH정보교육원에서 FullStack 과정을 수료했습니다.</p>
      </section>
      {/* part 2 : 한 row를 두 column으로 나눠서 좌측은 사진 우측은 소개 작성하는 about*/}
      <section className="home-about-two">
      <h2>소개</h2>
        <div className="about-row">
          <div className="about-image">
            <img src="프로필.jpg" alt="프로필 사진"/>
          </div>
          <div className="about-text">
            
            <p>이름 : 한승수</p>
            <p>나이 : 만 35세</p>
            <p>이메일 : gktk8411@naver.com</p>
            <p>깃허브 주소 : <a href="www.github.com/Amestest"></a></p>
            <p></p>
          </div>
        </div>
      </section>

      {/*******보유 기술 섹션*********/}
      <section className="home-skills">
      <h2>기술</h2>
      <ul>
        <li>HTML / CSS / JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>SQL : Oracle, MysSQL</li>
      </ul>

      </section>
      {/*프로젝트 소개 1개의 프로젝트 당 섹션 1개씩 작성*/}
      <section className="home-projects">
        <h2>프로젝트</h2>
        <div className="project-item">
        <h3>중관 과제 프로젝트</h3>
        <p>간단한 프로젝트 설명</p>
        {/* Link to 이용해서 프로젝트 이동 js 작성하기*/}
        </div>
      </section>
    </div>
  );
};
export default Home;
