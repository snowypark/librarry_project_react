import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { principalState } from "../atoms/principalAtom";
import { useCallback, useEffect } from "react";
import { getPrincipalRequest } from "../apis/api/principal";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/Home/HomePage";


function AuthRoute() {
    
    const [ principal, setPrincipal ] = useRecoilState(principalState);

    useEffect(() => {
        getPrincipal();        

    }, []);

    const getPrincipal = useCallback(() => {

        getPrincipalRequest()
        .then(response => {
            setPrincipal(() => response.data);

        }).catch(error => {
            console.log(error);
        });

    }, []);

    return (
        <Routes>
            
        <Route path='/auth/*' element={<AuthPage />}/>
        <Route path='/' element={ <HomePage />}></Route>
        </Routes>
    );
}

export default AuthRoute;