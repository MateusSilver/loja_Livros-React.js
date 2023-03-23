import Header from './components/headers/header';
import Grid from './components/geral/grid';


import './styles/App.css';
//import Products from './components/conteudo_produtos/products';
import Newsletter from './components/newsletter/newsletter';
import Produtos from './components/conteudo_produtos/products';

function App() {
  return (
    <div className="container">
      <Header/>
      <Grid/>
      <Produtos/>
      <Newsletter/>
    </div>
  );
}

export default App;
