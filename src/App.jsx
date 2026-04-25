import { useState } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Header from "./component/layout/Header";
import Main from "./component/layout/Main";

function App() {
  const [step, setStep] = useState(1);
  const [peserta, setPeserta] = useState([]);
  const [type, setType] = useState('mikrotik');
  return (
    <div className="relative min-h-dvh bg-base flex flex-col">
      <Header />
      <Main
        setPeserta={setPeserta}
        setStep={setStep}
        step={step}
        peserta={peserta}
        type={type}
        setType={setType}
      />
      {step != 1 && <Navbar setStep={setStep} />}
    </div>
  );
}

export default App;
