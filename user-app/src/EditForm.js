import { useState } from "react";


const EditForm = ({user, updateUser}) => {
    // 수정하기 폼에 기존에 수정하고 자하는 유저 정보를 넣어주기위해
    // useState(user) 작성
const [formData, setFormData] = useState(user);
}
export default EditForm;