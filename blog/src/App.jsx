/* eslint-disable : Lint 끄는 기능 */

import './App.css'
import { useState } from 'react';

function App() {
let post = '신림 우동 맛집';
let [글제목, 글제목변경] = useState(['남자 코트 추천', '신림 맛집 추천', '리액트 공부']);
let [따봉, 따봉변경] = useState(0);
let [modal, setModal] = useState(false); // 모달창에서 사용할 상태 변수

function 함수(){
console.log(1);
}


return (
<div className="App">
  <div className="black-nav">
    <h4>ReactBlog</h4>
  </div>
  <button onClick={()=> {
    let copy = [...글제목]; // 글제목 배열을 복사
    copy.sort(); // 배열을 가나다순으로 정렬
    글제목변경(copy); // 상태 업데이트
    }}>
    가나다순정렬</button>

  <button onClick={()=> {
    let copy = [...글제목]; // 글제목 배열을 복사
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
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
    <h4 onClick={()=> { setModal((state) => !state)}} >{ 글제목[2] }</h4>
    <p>6월 23일 발행</p>
  </div>

  {/* 모달 */}
  {/* <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div> */}

  {/* 아래와같이 컴포넌트 문법으로 사용 할 수 있음 */}
  {/* <Modal></Modal> */}

  {/* <ButtonType></ButtonType>

  <DescriptionBox></DescriptionBox> */}
  {/* <BannerStrip />
  <Button size="s" label="작은버튼" />
  <Button size="m" label="중간버튼" />
  <Button size="l" label="대왕큰버튼" /> */}
  {
  // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
  modal == true ? <Modal /> : null
  }

</div>
)
}

// Modal : 컴포넌트 라고 부름
function Modal() {
return (
<div className="modal">
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div>
)
}

function Button({ size, label }) {
return (
<button className={`btn btn_${size}`}>
  <span className="btn_text">{label}</span>
</button>
);
}


function BannerStrip() {
return (
<div className="banner_strip">
  <p className="text">📣 컴포넌트 만들기 숙제입니다. 컴포넌트 만들기 숙제입니다.❤️🎉❤️🍙👊✏️ </p>
</div>
)
}


// 컴포넌트 만드는 방법2
// const Modal = () => {
// return {
// }
// }


// 참고1 : html에서 병렬기입하려면
// function Modal() {
// return (
// <>
  // <div className="modal">
    // <h4>제목</h4>
    // <p>날짜</p>
    // <p>상세내용</p>
    // <div></div>
    // </div>
  // </>
// )
// }

// 어떤걸 컴포넌트로 만들면 좋은가?
// 1. 반복되는 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 ui들)
export default App