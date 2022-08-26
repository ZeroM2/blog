/*eslint-disable*/

import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, editTitle] = useState(["남자코트 추천 ", "강남 우동 맛집"]);
  let [title2, editTitle2] = useState(["여자 코트 추천", "강북 라멘 맛집"]);
  let [like, editLike] = useState(0);
  let [noLike, editNoLike] = useState(0);
  let [modal, setModal] = useState(true);

  console.log(modal);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {title[0]}
          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            {" "}
            {"상세보기"}
          </button>
          {modal == false ? <Modal></Modal> : null}
        </h3>
      </div>
      <h3>
        {/* 좋아요 버튼 */}
        <span
          onClick={() => {
            editLike(like + 1);
          }}
        >
          😍{like}
        </span>
        {/* 싫어요 버튼 */}
        <span
          onClick={() => {
            editNoLike(noLike + 1);
          }}
        >
          🥲{noLike}
        </span>
      </h3>

      <p>2월 17일 발행</p>
      <hr />
    </div>
  );
}
/*모달창 컴포넌트*/
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
