// App.js
import React from 'react';
import Router from './Router';
import './App.css'

function App() {
  window.scrollTo(0,0)
  window.history.pushState({}, '', '/');
  window.dispatchEvent(new PopStateEvent('popstate'));
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
