import './App.css';
import React from 'react';
import Header from './components/parts/header/Header'
import Footer from './components/parts/footer/Footer'
import MainMenu from './components/parts/mainMenu/MainMenu'
import LandingPage from './components/landingPage/LandingPage';
import { openMainMenuState } from "./recoil_state";
import { useRecoilState } from 'recoil';
import ApiCalls from './services/ApiCalls';

function App() {
  const [openMainMenu] = useRecoilState(openMainMenuState);

  return (
    <div className="App">
      <Header />
      <ApiCalls />
      {openMainMenu ? <MainMenu /> : null}
      {/* <MainMenu /> */}
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;