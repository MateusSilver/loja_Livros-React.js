import Header from './components/header';
import Grid from './components/grid';

import './styles/App.css';
import Products from './components/products';
import Newsletter from './components/newsletter';

function App() {
  return (
    <div className="container">
      <Header/>
      <Grid/>
      <Products/>
      <Newsletter/>
    </div>
  );
}

export default App;
