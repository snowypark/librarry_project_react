
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RootContainer from './components/RootContainer/RootContainer';
import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import RootSideMenuLeft from './components/RootSideMenuLeft/RootSideMenuLeft';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <RootSideMenuLeft />
        <RootHeader />
        <Routes>
        <Route path='/auth/*' element={<AuthPage />}/>
        
        
        </Routes>
      </RootContainer>
    </RootLayout>
  );
}

export default App;
