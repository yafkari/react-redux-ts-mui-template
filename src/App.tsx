import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
