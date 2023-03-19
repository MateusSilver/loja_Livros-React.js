import Header from './components/header';
import Grid from './components/grid';

import './styles/App.css';
import Products from './components/products';

function App() {
  return (
    <div className="container">
      <Header/>
      <Grid/>
      <Products/>
    </div>
  );
}

export default App;
