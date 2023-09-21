import React from 'react';
import List from './components/List';
import Result from './components/Result';

function App() {


  return (
    <div>
      {window.location.pathname === "/" ? <List /> : <Result />}
    </div>)
}

export default App;
