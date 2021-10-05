import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  const [name, steName] = useState("Marcinho");
  const [bg, setBg] = useState("#FF0000");

  const [age, setAge] = useState(90);
  const handleClick = () => {
    setBg("#0000FF");
  };

  const handle20 = () => {
    setAge(20);
    setBg("#00FF00")
  };

  const handle90 = () => {
    setAge(90);
    setBg("#0000FF");
  };

  return (
    <div style={{ background: bg }}>
      <Header name={name} age={age} />
      Olá {name}, tudo bem? sua idade {age}
      {age === 90 && <button onClick={handle20}>20</button>}
      {age === 20 && <button onClick={handle90}>90</button>}
      <Footer />
    </div>
  );
};

export default App;
