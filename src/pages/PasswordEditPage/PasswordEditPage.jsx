import React from 'react';
import AuthPageInput from '../../components/AuthPageInput/AuthPageInput';
import { useInput } from '../../hooks/useInput';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { useMutation } from 'react-query';
import { editPasswordRequest } from '../../apis/api/editPassword';

function PasswordEditPage() {
    useAuthCheck();

    const [ oldPassword,handleOldPassword, oldMessage ] = useInput("oldPassword");
    const [ newPassword,handleNewPassword, newMessage ] = useInput("newPassword");
    const [ newPasswordCheck,handleNewPasswordCheck, newCheckMessage ] = useInput("newPasswordCheck");

    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: editPasswordRequest,
        onSuccess: response => {

        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    
                }
            }
        }
    });

    const handleClickSubmit = () => {
        editPasswordMutation.mutate({
            oldPassword,
            newPassword,
            newPasswordCheck
        })
    }

    return (
        <div>
            <h1>비밀번호 변경하기</h1>
            <AuthPageInput type={"password"} value={oldPassword} onChange={handleOldPassword} placeholder={"현재 비밀번호를 입력하세요."} message={oldMessage} />
            <AuthPageInput type={"password"} value={newPassword} onChange={handleNewPassword} placeholder={"새로운 비밀번호를 입력하세요."} message={newMessage}/>
            <AuthPageInput type={"password"} value={newPasswordCheck} onChange={handleNewPasswordCheck} placeholder={"새로운 비밀번호를 확인하세요."} message={newCheckMessage}/>
            <button onClick={handleClickSubmit}>비밀번호 변경하기</button>
        </div>
    );
}

export default PasswordEditPage;