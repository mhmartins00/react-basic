import './App.css';
import Comentario from './components/Comentario';
function App() {
  const day = 4;
  return (
    <div className="App">
        <h1>Meu projeto React</h1>

        <Comentario nome="murillo" email="murillo@mail.com" data={new Date( 2023, 1, day)}>
          Olá, tudo bem?
        </Comentario>
        <Comentario nome="larissa" email="larissa@mail.com" data={new Date( 2023, 5, day)}>
          Olá, tudo bem siim
        </Comentario>
    </div>
  );
}

export default App;
