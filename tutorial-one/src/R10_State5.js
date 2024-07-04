import React, {useState} from "react";

/* 1번 자식은 ID를 가진 객체 */
const ID값 = (props) => {
    // handler  = 핸들러 = 자동차 운전할 때 핸들을 가지고 자동차를 조종하는 것처럼
    // 핸들이라는 이름에는 어떤 값을 조종한다 어떤 값을 처리한다 의미가 있음
    // 코딩에서 핸들이라는 것은 값을 조종한다
    const {handler} = props;
    return (
        <div className="wrapper">
            {/* htmlFor = for 속성 */}
            <label htmlFor="inputId">ID</label>
            {/* onChange = 값이 바뀌었을 때 부모로부터 전달받은 함수 핸들러 수행 */}
            <input type="text" id="inputId" onChange={handler}/>
        </div>
    )
}

const PW값 = ({handler}) => {

return(
    <input type="password" id="inputPw" onChange={handler}/>
)


}
const 부모예제 = () => {
    //상태 변수 선언 (State, useState)
    const [id, setId] = useState(''); //맨 처음 빈 값으로 넣어줄 때 '' 사용
    
    // 이벤트        : 동작, 행위  ex) 어 오늘 무슨 이벤트 있어? => 어 오늘 무슨 행위 해?
    // 이벤트 리스너 : 동작(이벤트) 감지
    // 이벤트 핸들러 : 이벤트가 감지됐을 때 수행할 기능

    // id값조종 이라는 이벤트 핸들러 기능 설정
    const id값조종 = (e) => {
        setId(e.target.value)
    }  

    return (
        // props를 이용해 이벤트 핸들러용 함수를 자식 객체(컴포넌트)에 전달
        <>
        <ID값 handler={id값조종}/>
        <PW값 handler={pw값조종}/>

        {/* Id,PW가 입력되지 않으면 버튼 비활성화 */}
        </>
    )

}

export default 부모예제;