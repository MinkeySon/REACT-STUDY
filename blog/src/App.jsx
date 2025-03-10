import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let post = "강남 우동 맛집";
  let logo = 'React Logo';

  let [t1, a] = useState(['여자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [heart, h] = useState(0);

  function like(){
    console.log(1);
  }

  return (
    <div>
      <div className = "header">
        <h3>{logo}</h3>
      </div>
      
      <button onClick={()=>{
        let copy = [...t1];
        copy.sort();
        a(copy);
      }}>가나다순정렬</button>

      <div className='list'>
        <h4>{t1[0]} <span onClick={()=>{h(heart + 1)}}>❤</span> {heart} </h4>
        <p>2월 7일 발행</p>
        <span onClick={()=>{
          let copy = [...t1];
          copy[0] = '남자 코트 추천';
          a(copy);
          }}>change btn</span>
        </div>
        <div className='list'>
        <h4>{t1[1]}</h4>
        <p>2월 7일 발행</p>
        </div>
        <div className='list'>
        <h4>{t1[2]}</h4>
        <p>2월 7일 발행</p>
        </div>
  </div>
  );
}

export default App
