import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ProductList from './Components/ProductList';
import ItemDescription from './Components/ItemDescription';
import './App.css';

function App(){
  return (
    <Router>
      <div className="container">
        <Route exact path = '/' component = {ProductList}/>
        <Route exact path = '/ItemDescription' component = {ItemDescription} />
        </div>
    </Router>
);
 
}
export default App;