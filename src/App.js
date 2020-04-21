import React from 'react';

import HeaderComponent from './header/HeaderComponent';
import NewTodoContentComponent from './todos/NewTodoContentComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NewTodoContentComponent />
    </div>
  );
}

export default App;
