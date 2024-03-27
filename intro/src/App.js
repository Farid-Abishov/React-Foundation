import React from 'react' // ??
import './app.css';
import Navi from './Navi'
import CategoryList  from './CategoryList';
import Product from './Product';
function App() {
  return (
    <div>
       <Navi/>
       <CategoryList/>
       <Product/>
    </div>
  );
}

export default App;
