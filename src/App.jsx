
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RootContainer from './components/RootContainer/RootContainer';
import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import RootSideMenuLeft from './components/RootSideMenuLeft/RootSideMenuLeft';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/Home/HomePage';
import AuthRoute from './Routes/AuthRoute';

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <RootSideMenuLeft />
        <RootHeader />
        <AuthRoute />

      </RootContainer>
    </RootLayout>
  );
}

export default App;
