import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  let name = "Marcinho";
  let age = 99;

  const [bg, setBg] = useState("#FF0000");
  const handleClick = () => {
    alert("Clicou na função");
    setBg("#0000FF");
  };

  return (
    <div style={{ background: bg }}>
      <Header name={name} age={age} />
      Olá {name}, tudo bem? sua idade {age}
      <button onClick={handleClick}>Clique aqui</button>
      <Footer />
    </div>
  );
};

export default App;
