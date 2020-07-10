import React, { Component } from "react";

export default class Child extends Component {
  Alterar = () => {
      this.props.funcaoBixano('Robin');
  };

  render() {
    return (
      <div>
        <h3>Child</h3>
        <p>Nome: {this.props.nome}</p>

        <button onClick={this.Alterar}>Nome bixano</button>
        <hr />
      </div>
    );
  }
}
