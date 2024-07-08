import { Routes, Route } from "react-router-dom";
//Routes, Route import해서 링크 설정


function App() {
  return (
    <div>
      <Routes> {/* 링크들 모음집이라는 설정 */}
        {/* 
        Java에서   @GetMapping("/") 으로 주소를 설정 해주는 것이
        React에서  path="/" 이다.
        Java에서   return "html파일명"으로 보여줄 화면 설정 해주는 것이
        React에서  element={<Home /> 이다.

        단, index.js는 React에서 이미 사용하고 있는 이름이기 때문에
        Index.js나 index로 시작하는 이름은 피하는게 좋음
        */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
