import React, { Component } from "react";
import Child from "./components/Child";

class App extends Component {
  state = {
    nome: "Junior",
    sobrenome: "Jr",
  };

  state = {
    nome: "Márcio",
  };

  Alterar = () => {
    this.setState({
      nome: `${this.state.nome} Botelho`,
    });
  };

  render() {
    return (
      <div>
        <h3>Parent</h3>
        <button onClick={this.Alterar}>Add Sobrenome</button>
        <hr />
        <Child nome={this.state.nome} />
      </div>
    );
  }
}

export default App;
