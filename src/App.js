import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'

function App() {
  return (
    <HashRouter>

      <Header />
      <main>

          {routes}
        </main>
    </HashRouter>
  );
}

export default App;
