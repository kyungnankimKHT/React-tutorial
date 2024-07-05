import React, {useState, useContext} from "react";

import 유저정보모두저장 from './유저정보모두저장.js';

// input 타입을 만들고 저장하는 버튼을 생성
const 작성하는공간 = () => {

    const {userList, setUserList} = useContext(유저정보모두저장);

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const 유저추가 = () => {

    }

    return (
        <div>
            
        </div>
    )
}