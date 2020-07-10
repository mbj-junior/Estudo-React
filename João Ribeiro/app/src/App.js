import React, { Component } from "react";
import Identificacao from "./components/Identificacao";

class App extends Component {
  state = {
    nome: "Junior",
    sobrenome: "Jr",
  };

  render() {
    return (
      <div>
        <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome} />
      </div>
    );
  }
}

export default App;
