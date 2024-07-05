import React, {useState} from "react";

//외부에서 만든 Context 객체를 import 가져와 사용
import UserContext from "./UserContext";
import Child from "./Child";

//부모 컴포넌트 정의
const Parent = () => {
    // 상태변수 userList, setUserList 선언
    // userList 초기값 빈 배열 공간으로 만들어줄 것
    const [userList, setUserList] = useState([]);
    //     userList = 유저리스트 = 처음엔 아무 유저도 없기 때문에 빈 목록
    //     setUserList = 추가될 유저 리스트 

    return (
        <UserContext.Provider value={{userList, setUserList}}>
            <Child />

        </UserContext.Provider>

    )
}
export default Parent;
