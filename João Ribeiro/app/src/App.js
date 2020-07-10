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

  MostraSobrenome = () => {
    this.setState({
      nome: `${this.state.nome} Botelho`,
    });
  };

  MostraBixano = (nomeBixano) => {
    this.setState({
      bixano: nomeBixano,
    });
  };

  render() {
    return (
      <div>
        <h3>Parent</h3>
    <p>Bixano: {this.state.bixano}</p>
        <button onClick={this.MostraSobrenome}>Add Sobrenome</button>
        <hr />
        <Child nome={this.state.nome} funcaoBixano={this.MostraBixano} />
      </div>
    );
  }
}

export default App;
