
import './App.css';
import RootContainer from './components/RootContainer/RootContainer';
import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import RootSideMenuLeft from './components/RootSideMenuLeft/RootSideMenuLeft';

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <RootSideMenuLeft />
        <RootHeader />

        
      </RootContainer>
    </RootLayout>
  );
}

export default App;
