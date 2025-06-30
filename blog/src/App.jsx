/* eslint-disable : Lint 끄는 기능 */

import './App.css'
import { useState } from 'react';

function App() {
  let post = '신림 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '신림 맛집 추천', '리액트 공부']);
  let [따봉, 따봉변경] = useState(0);

  function 함수(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목]; // 글제목 배열을 복사
        copy.sort(); // 배열을 가나다순으로 정렬
        글제목변경(copy); // 상태 업데이트
      }}>
        가나다순정렬</button>

        <button onClick={() => {
          let copy = [...글제목]; // 글제목 배열을 복사
          copy[0] = '여자 코트 추천';
          a(copy);
          }}>숙제확인버튼</button>
      <div className="list">
        {/* onclick 이벤트 핸들러 */}
        <h4>{ 글제목[0] } <span onClick={ ()=> { 따봉변경(따봉+1) }}>좋아요</span> {따봉} </h4>
        <p>6월 23일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>6월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>6월 23일 발행</p>
      </div>
    </div>
  )
}

export default App