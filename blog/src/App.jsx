import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let post = "강남 우동 맛집";
  let logo = 'React Logo';

  let [t, setT] = useState(['여자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [heart, setHeart] = useState(Array(t.length).fill(0)); // t개수 만큼 array 생김
  let [modal, setModal] = useState(false);
  return (
    <div>
      <div className = "header">
        <h3>{logo}</h3>
      </div>
      
      <button onClick={()=>{
        let copy = [...t];
        copy.sort();
        a(copy);
      }}>가나다순정렬</button>


      {
        t.map(function(a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(true)}}>
                {t[i]} <span onClick={()=>{
                  let myHeart = [...heart];
                  myHeart[i] += 1;
                  setHeart(myHeart);
                  }}>❤</span> 
                  {heart[i]}
                </h4>
              <p>2월 7일 발행</p>
            </div>
          )
        })
      }
        
        {
          modal == true ? <Modal/> : null
        }

  </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
  )
}

export default App
