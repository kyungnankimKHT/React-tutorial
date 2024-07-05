import React, {createContext, useContext} from "react";
/*
Context 란? 무엇일까?
context를 사용하면 단계마다 일일이 props를 넘겨주지 않고도 
컴포넌트(객체)에 데이터를 제공할 수 있음

createContext
 - 기본값을 가질 수 있고, 이 기본값은 해당 컨텍스트를 사용하는 컴포넌트가
   상위 컴포넌트에서 제공하는 값을 찾을 수 없을 때 사용

useContext
 - 컨텍스트의 현재 값을 가져오는 데 사용
   컨스텍스에서 어떤 값을 받아 현재 값으로 보여줌

Provider
 - 컨텍스트를 사용하는 컴포넌트들한테 동일한 값을 모두 제공하는 컴포넌트
   value라는 prop을 받아서 하위 컴포넌트들이 접근할 수 있도록 함
*/

/* 1. Context 객체 생성 */
// Context를 저장하는 변수명은 무조건 *대*문*자*로 시작
const TestContext = createContext();

/* 3. 자식 컴포넌트 */
const 자식 = () => {
    const 부모value값 = useContext(TestContext);
    return (
        <>
            <h2>자식 공간</h2>
            <p>{부모value값}</p>
        </>
    )
}

/* 2. 부모 컴포넌트 */
const 부모 = () => {
    return (
        /* Context 객체를 이용해서 하위 컴포넌트에 value 값을 전달 */
        <TestContext.Provider value='부모가 전달한 값'>
            <자식/>
        </TestContext.Provider>
    );
}
export default 부모;