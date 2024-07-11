import React, {useState} from "react";
import Result from './Result';
import './TypingTest.css';

// 클라이언트가 입력한 값이 일치하는지 확인후 Result.js 적힌 결과를 보여주는 게임
const 타자대회 = () => {
    const [텍스트입력, set텍스트입력] = useState(''); //처음 입력창은 빈 공간
    const [결과확인, set결과확인] = useState(false); //처음에는 맞춘게 없으니 false


    const 타이핑문제 = '도토리는 맛있다.';
    
    const 값변경하기 = (e) => {
        set텍스트입력(e.target.value);

        if(e.target.value === 타이핑문제) {
            set결과확인(true);
        }
    }
    
    const 다시시작 = () => {
        set텍스트입력('');
        set결과확인(false);
    }
    return (
        <div className="typing-test">
            <h1>타자치기대회</h1>
            <p>오늘의 문제 : {타이핑문제}</p>
            <div className="typing-container">
                {/* value = 초기에 빈공간  
                    onChange = 작성한 값 변경  
                    disabled = 정답일 때 입력한 값 수정 못하게 막아버림  */}
                <img src="/hancom.jpg" className="character-image"/>
                <textarea
                    value={텍스트입력}
                    onChange={값변경하기}
                    disabled={결과확인}
                />
                {/* 변경되지 않는 사진을 넣을 때는 public 
                    사진의 특정값을 주기적으로 변경할 때는 src
                    현재는 한 사진을 고정할 것이기 때문에 public
                */}
               
            </div>
            {/* Result js 파일에 inputText =  텍스트입력과  correctText = 타이핑문제 결과 전달    */}
             {/*Link 이용해서 다음문제 이동하기  몇초안에 타자작성하기 useEffect timer*/}
            {결과확인 && 
            <Result inputText={텍스트입력} correctText={타이핑문제}  
           
            />}
            {결과확인 && <button onClick={다시시작}>다시 시작하는버튼</button>}
        </div>

    )
}

export default 타자대회;