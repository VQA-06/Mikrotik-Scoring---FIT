import { useState } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Header from "./component/layout/Header";
import Main from "./component/layout/Main";

function App() {
  const [step, setStep] = useState(1);
  const [peserta, setPeserta] = useState([]);
  const url = "https://mscore.pages.dev";
  const pImage = `${url}/preview.png`;
  return (
    <div className="relative min-h-screen bg-base">
      <title>Mikrotik Scoring System | FIT</title>
      <link rel="icon" type="image/svg+xml" href="/icon.png" />
      <meta
        name="description"
        content="Scoring System for Mikrotik Competiton | FIT"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta property="og:title" content="Mikrotik Scoring System | FIT" />
      <meta
        property="og:description"
        content="Scoring System for Mikrotik Competiton | FIT"
      />

      <meta property="og:image" content={pImage} />
      <Header />
      <Main
        setPeserta={setPeserta}
        setStep={setStep}
        step={step}
        peserta={peserta}
      />
      {step != 1 && <Navbar setStep={setStep} />}
    </div>
  );
}

export default App;
