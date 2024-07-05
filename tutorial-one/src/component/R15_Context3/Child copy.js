import React, {useState, useContext} from "react";

import UserContext from "./UserContext";

const Child = () => {
    const {userList, setUserList} = useContext(UserContext);
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const 사용자추가하기 = () =>{
        const   유저 = {"names" : inputName, "ages" : inputAge  };
        const 새로운유저 = [...userList, 유저]; 
        setUserList(새로운유저); 
    }
    return (
        <div>
            <label htmlFor="inputId">이름</label>
            <input type="text" id = "inputId"
               onChange={ (e) => {setInputName(e.target.value)   }   } value={inputName}/>
            <br></br>
            <label htmlFor="inputAge">나이</label>
            <input type="number" id = "inputAge"
                 onChange={ (e) => {setInputAge(e.target.value)   }   } value={inputAge} />
            <button onClick={사용자추가하기}>추가버튼</button>
        </div>
    )

}
export default Child;