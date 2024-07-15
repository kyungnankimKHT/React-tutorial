import React, {useState} from 'react';
import LoginContext from './components/LoginContext';

/* 현재 App.js는 제일 위에 있는 컴포넌트 = 객체 */
function App() {
  //회원 가입창 보이기 / 숨기기
  const [signUpView, setSignUpView] = useState(false);

  //로그인한 회원 정보 저장
  const [loginMember, setLoginMember] = useState(null);

  return (
    {/* value={} => 하나의 값만 작성
        value={{}} => 두가지 이상의 값을 작성
        loginMember => 처음에 로그인 안된 초기값을 가지고 있는 것
        setLoginMember => 로그인 한 다음에 로그인한 정보를 가지고 있는 것
    */}
    <LoginContext.Provider value={ {loginMember, setLoginMember} }>
    </LoginContext.Provider>
  );
}

export default App;
