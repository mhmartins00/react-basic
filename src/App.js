import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "João",
        email: "Joao@mail.com",
        data: new Date( 2023, 1, 4),
        mensagem: "Olá turubem, eu sou o jõa?"
      },
      {
        nome: "Maria",
        email: "Maria@mail.com",
        data: new Date( 2023, 1, 4),
        mensagem: "Olá Eu Sou a Maria}"
      },
      {
        nome: "Murillo",
        email: "murillo@mail.com",
        data: new Date( 2023, 1, 4),
        mensagem: "Bom dia a todos}"
      }
    ]
  }
  render(){
    
    const day = 4;
    return (
      <div className="App">
          <h1>Meu projeto React</h1>
          {this.state.comentarios.map((comentario, indice) => (
            
          <Comentario 
          key={indice}
          nome={comentario.nome}
          email={comentario.email}
          data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
          ))}
      </div>
    );
  }
}

export default App;
