import React, { useRef, useState } from 'react'
import './ttt.css'
import oIcon from '../assets/circle.png'
import xIcon from '../assets/cross.png'
let data=["","","","","","","","",""];
const winningCombinations = [
    [0, 1, 2],  
    [3, 4, 5],   
    [6, 7, 8],   
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6]   
];/* eslint-disable */
const ttt = () => {
    let[count,setCount]= useState(0);
    let[lock,setLock]= useState(false);
    let  titleRef = useRef<HTMLHeadingElement>(null);
    let box1 =useRef(null);
    let box2 =useRef(null);
    let box3 =useRef(null);
    let box4 =useRef(null);
    let box5 =useRef(null);
    let box6 =useRef(null);
    let box7 =useRef(null);
    let box8 =useRef(null);
    let box9 =useRef(null);
    let boxArray=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
    const toggle =(e:React.MouseEvent<HTMLDivElement>,num:number) =>{
        if(lock)
            return 0;
        if(count%2==0){
          const targetElement = e.target as HTMLDivElement;
            targetElement.innerHTML=`<img src='${xIcon}'>`;
        data[num]='x';
    setCount(++count);
}
else{
  const targetElement = e.target as HTMLDivElement;
  targetElement.innerHTML=`<img src='${oIcon}'>`;
    data[num]='o';
    setCount(++count);
} checkWin();
    }
    const checkWin = ()=>{
        for (let combination of winningCombinations) {
            const [a, b, c] = combination; 
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                won (data[a]);  
            }
    }}
    const won =(winner:string)=> {
        setLock(true);
        if(winner==='x')
          if (titleRef.current) {
            if (titleRef.current) {
    titleRef.current.innerHTML = `Congratulation: <img src=${xIcon} > wins`;
}
        }
        else
        if (titleRef.current) {
          (titleRef.current as any).innerHTML = `Congratulation: <img src=${oIcon} > wins`;
      }
    }
    const reset = ()=>{
        setLock(false);
        data=["","","","","","","","",""];
        if (titleRef.current) {
          titleRef.current.innerHTML = `Tic Tac Toe in <span>REACT</span>`;
      }
        boxArray.map((e)=>{
          if(e.current)
            (e.current as any).innerHTML=""; 
        })
    }
    
  return (
    <>
  <div className="container">
    <h1 className="title" ref={titleRef} >
      Tic Tac Toe in <span>REACT</span>
    </h1>
    <div className="board">
      <div className="row1">
        <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
        <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
        <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
      </div>
      <div className="row2">
        <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
        <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
        <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
      </div>
      <div className="row3">
        <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
        <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
        <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
      </div>
    </div>
    <button className="reset" onClick={()=> {reset()}}>RESET</button>
  </div>
</>
  )
}/* eslint-enable */

export default ttt