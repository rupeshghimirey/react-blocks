import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx';
import Main from './components/Main.jsx'
import SubContents from './components/SubContents.jsx'
import Advertisement from './components/Advertisement.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className = "nav-main-body">
        <Navigation></Navigation>
        <Main>

        <div>
          <div className = "nav-main-subcontents">
          <SubContents></SubContents>
          <SubContents></SubContents>
          <SubContents></SubContents>
          </div>
          <Advertisement></Advertisement>
      </div>
        </Main>
      </div>
      
    </div>
  );
}

export default App;


