import './App.css';
import React from 'react';
import HeaderTop from './components/parts/headerTop/headerTop'
import Header from './components/parts/header/Header'
import Footer from './components/parts/footer/Footer'
import MainMenu from './components/parts/mainMenu/MainMenu'
import { openMainMenuState } from "./recoil_state";
import { useRecoilState } from 'recoil';
import ApiCalls from './services/ApiCalls';

import Routing from './services/Routing';


function App() {
  const [openMainMenu] = useRecoilState(openMainMenuState);

  return (
    <div className="App">
      <HeaderTop />
      <Header />
      <ApiCalls />
      {openMainMenu ? <MainMenu /> : null}
      {/* <MainMenu /> */}
      <Routing />
      <Footer />
    </div >
  );
}

export default App;