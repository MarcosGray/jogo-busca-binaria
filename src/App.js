import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setMin(0);
    setMax(300);
    setNumPalpites(1);
  };
  if (estado === "ENTRADA") {
    return (
      <div className="resposta">
        <button onClick={iniciarJogo}>Começar a jogar !</button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div className="resposta">
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar o jogo</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu o número é {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <p>Qt. palpites: {numPalpites} </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
