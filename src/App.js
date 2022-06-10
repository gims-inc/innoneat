import './App.css';
import 'jquery/dist/jquery.min.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

import MainContent from './container/mainContent';

function App() {
  return (
    <div className="App">
            <MainContent />
    </div>
  );
}

//export default App;
