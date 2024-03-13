import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Route, Routes } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';

function AuthPage() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/signin' />
                <Route path='/signup' element={ <SignupPage />} />
                <Route path='/signup/oauth' />
            </Routes>
        </div>
    );
}

export default AuthPage;