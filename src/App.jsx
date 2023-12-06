import "./app.css";
import Item from "./Item";
import { useEffect, useState } from "react"; // Importe o useState
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import knapsack from "./utils/knapsack";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [itensValue, setItensValue] = useState([]);
  const [itensWeight, setItensWeight] = useState([]);
  const [progress, setProgress] = useState();
  const [userValue, setUserValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [answer, setAnswer] = useState([]);

  const [esmeralda, setEsmeralda] = useState(false);
  const [lightsaber, setLightsaber] = useState(false);
  const [enchiridion, setEnchiridion] = useState(false);
  const [cubo, setCubo] = useState(false);
  const [materia, setMateria] = useState(false);
  const [plasma, setPlasma] = useState(false);
  const [portalGun, setPortalGun] = useState(false);
  const [dragonBall, setDragonBall] = useState(false);

  const [showWinAlert, setShowWinAlert] = useState(false);
  const [showLoseAlert, setShowLoseAlert] = useState(false);
  const [showFullAlert, setShowFullAlert] = useState(false);
  const [itemAddedAlert, setItemAddedAlert] = useState(false);
  const [FullWeightAlert, setFullWeightAlert] = useState(false);

  const handleRegister = () => {
    let value = userValue;
    let completed = progress;
    let userArray = userAnswer;

    switch (inputItem) {
      case "esmeralda":
        if (completed + itensWeight[0] <= 100 && !esmeralda) {
          completed += itensWeight[0];
          value += itensValue[0];
          setEsmeralda(true);
          userArray.push(inputItem);
        }

        break;
      case "lightsaber":
        if (completed + itensWeight[1] <= 100 && !lightsaber) {
          completed += itensWeight[1];
          value += itensValue[1];
          setLightsaber(true);
          userArray.push(inputItem);
        }

        break;
      case "enchiridion":
        if (completed + itensWeight[2] <= 100 && !enchiridion) {
          completed += itensWeight[2];
          value += itensValue[2];
          setEnchiridion(true);
          userArray.push(inputItem);
        }

        break;
      case "cubo":
        if (completed + itensWeight[3] <= 100 && !cubo) {
          completed += itensWeight[3];
          value += itensValue[3];
          setCubo(true);
          userArray.push(inputItem);
        }

        break;
      case "materia":
        if (completed + itensWeight[4] <= 100 && !materia) {
          completed += itensWeight[4];
          value += itensValue[4];
          setMateria(true);
          userArray.push(inputItem);
        }

        break;
      case "plasma":
        if (completed + itensWeight[5] <= 100 && !plasma) {
          completed += itensWeight[5];
          value += itensValue[5];
          setPlasma(true);
          userArray.push(inputItem);
        }

        break;
      case "portalGun":
        if (completed + itensWeight[6] <= 100 && !portalGun) {
          completed += itensWeight[6];
          value += itensValue[6];
          setPortalGun(true);
          userArray.push(inputItem);
        }

        break;
      case "dragonBall":
        if (completed + itensWeight[7] <= 100 && !dragonBall) {
          completed += itensWeight[7];
          value += itensValue[7];
          setEsmeralda(true);
          userArray.push(inputItem);
        }

        break;
    }

    setUserValue(value);
    setProgress(completed);
    setUserAnswer(userArray);
  };

  const handleReset = () => {
    setProgress(0);
    setUserValue(0);
    setUserAnswer([]);
    setEsmeralda(false);
    setLightsaber(false);
    setEnchiridion(false);
    setCubo(false);
    setMateria(false);
    setPlasma(false);
    setPortalGun(false);
    setDragonBall(false);
    setAnswer(knapsack(generateProblem(), 100));
  };

  const handleEmpty = () => {
    setProgress(0);
    setUserValue(0);
    setUserAnswer([]);
    setEsmeralda(false);
    setLightsaber(false);
    setEnchiridion(false);
    setCubo(false);
    setMateria(false);
    setPlasma(false);
    setPortalGun(false);
    setDragonBall(false);
  };

  const handleCheck = () => {
    let userArray = userAnswer;
    let win = false;

    if (progress > 0) {
      if (answer.selectedItems.length == userArray.length) {
        for (let i = 0; i < userArray.length; i++) {
          if (answer.selectedItems.find((item) => item.name == userArray[i])) {
            win = true;
          } else {
            win = false;
            break;
          }
        }
      }

      if (userValue >= answer.maxValue && win) {
        setShowWinAlert(true);
        console.log("ganhou");
      } else {
        setShowLoseAlert(true);
        console.log("perdeu");
      }
    }
  };

  const generateProblem = () => {
    let value = [];
    let weight = [];
    for (let i = 0; i <= 7; i++) {
      value[i] = Math.floor(Math.random() * 85) + 25;
      weight[i] = Math.floor(Math.random() * 30) + 18;
    }
    setItensValue(value);
    setItensWeight(weight);

    let items = [
      { name: "esmeralda", weight: weight[0], value: value[0] },
      { name: "lightsaber", weight: weight[1], value: value[1] },
      { name: "enchiridion", weight: weight[2], value: value[2] },
      { name: "cubo", weight: weight[3], value: value[3] },
      { name: "materia", weight: weight[4], value: value[4] },
      { name: "plasma", weight: weight[5], value: value[5] },
      { name: "portalGun", weight: weight[6], value: value[6] },
      { name: "dragonBall", weight: weight[7], value: value[7] },
    ];

    return items;
  };

  useEffect(() => {
    setAnswer(knapsack(generateProblem(), 100));
    setProgress(0);
  }, []);

  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div className="main">
      <div className="title-container">
        <h1>Space Transport S.A</h1>
      </div>

      <div className="description-container">
        <div className="description-rectangle">
          <p className="description">
            Bem-vindo(a) ao Space Transports S.A! um simulador de itens espaciais de forma 
            a vender esses produtos buscando alcançar um lucro em cima do ganho de moedas espaciais
            da Space Transport S.A. Utilizamos o Knapsack Problem com Programação Dinâmica
            para determinar a forma mais lucrativa de obter moedas espaciais com o espaço determinado.
            Mas queremos que você faça isso sozinho(a)! Escolha os itens que você deseja comprar
            para caber em sua sacola (knapsack) e vamos mostrar o quanto irá receber por isso,
            se você alcançar o lucro máximo com os itens e pesos dados, você ganha!
          </p>
        </div>
      </div>

      <div className="item-container">
        <Item
          type={"Plasma Sintético de Nebulosa"}
          value={itensValue[0]}
          weight={itensWeight[0]}
          image="https://i.imgur.com/CXtVjJKt.jpg"
        />
        <Item
          type={"Cristal de Vórtice Quântico"}
          value={itensValue[1]}
          weight={itensWeight[1]}
          image="https://i.imgur.com/5tDEYcMt.jpg"
        />
        <Item
          type={"Cubo de Antimatéria Anunnaki"}
          value={itensValue[2]}
          weight={itensWeight[2]}
          image="https://i.imgur.com/D2IN6XTt.jpg"
        />
        <Item
          type={"Núcleo de Energia Psíquica Psiloniano"}
          value={itensValue[3]}
          weight={itensWeight[3]}
          image="https://i.imgur.com/MA7P6hvt.jpg"
        />
        <Item
          type={"Fragmento de Lua Errante"}
          value={itensValue[4]}
          weight={itensWeight[4]}
          image="https://i.imgur.com/CXtVjJKt.jpg"
        />
        <Item
          type={"Disco de Gravidade Zero"}
          value={itensValue[5]}
          weight={itensWeight[5]}
          image="https://i.imgur.com/5tDEYcMt.jpg"
        />
        <Item
          type={"Cristal Harmonizador Hiperespacial"}
          value={itensValue[6]}
          weight={itensWeight[6]}
          image="https://i.imgur.com/D2IN6XTt.jpg"
        />
        <Item
          type={"Amuleto Gravitacional Grithorian"}
          value={itensValue[7]}
          weight={itensWeight[7]}
          image="https://i.imgur.com/MA7P6hvt.jpg"
        />
      </div>

      <div className="handle-game">
        <p>Ocupação da Nave:</p>
        <LinearProgress variant="determinate" value={progress} />
        <p>{progress}%</p>

        <div className="selection-container">
          <label htmlFor="item">Selecione o Item que quer adicionar:</label>
          <select
            id="item"
            name="item"
            onChange={(e) => setInputItem(e.target.value)}
          >
            <option value="esmeralda">Plasma Sintético de Nebulosa</option>
            <option value="lightsaber">Cristal de Vórtice Quântico</option>
            <option value="enchiridion">Cubo de Antimatéria Anunnaki</option>
            <option value="cubo">Núcleo de Energia Psíquica Psiloniano</option>
            <option value="materia">Fragmento de Lua Errante</option>
            <option value="plasma">Disco de Gravidade Zero</option>
            <option value="portalGun">Cristal Harmonizador Hiperespacial</option>
            <option value="dragonBall">Amuleto Gravitacional Grithorian</option>
          </select>
        </div>

        <button onClick={() => handleRegister()}>Escolha a quantidade</button>

        <div className="handle-result">
          <p> Space Coins: {userValue} </p>
          <div className="button-container">
            <button onClick={() => handleEmpty()}> Esvaziar Mochila </button>
            <button onClick={() => handleCheck()}> Checar resultado </button>
            <button onClick={() => handleReset()}> Reiniciar </button>
          </div>

          {showWinAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" onClose={() => setShowWinAlert(false)}>
                Parabéns! Você ganhou{" "}
              </Alert>
            </Stack>
          )}

          {showLoseAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert
                variant="filled"
                severity="error"
                onClose={() => setShowLoseAlert(false)}
              >
                Que pena, você perdeu{" "}
              </Alert>
            </Stack>
          )}

          {showFullAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert
                variant="filled"
                severity="warning"
                onClose={() => setShowFullAlert(false)}
              >
                {" "}
                Passou do limite{" "}
              </Alert>
            </Stack>
          )}

          {itemAddedAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert
                variant="filled"
                severity="warning"
                onClose={() => setItemAddedAlert(false)}
              >
                {" "}
                Item já adicionado{" "}
              </Alert>
            </Stack>
          )}

          {FullWeightAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert
                variant="filled"
                severity="warning"
                onClose={() => setFullWeightAlert(false)}
              >
                {" "}
                Peso ultrapassou o disponível{" "}
              </Alert>
            </Stack>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
