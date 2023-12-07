import "./app.css";
import Item from "./Item";
import { useEffect, useState } from "react"; // Importe o useState
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import knapsack from "./utils/knapsack";

import SciFiBarrel from "./imgs/SciFiBarrel.png"
import SciFiCargo from "./imgs/SciFiCargo.png"
import SciFiContainer1 from "./imgs/SciFiContainer1.png"
import SciFiContainer2 from "./imgs/SciFiContainer2.png"

function App() {
  const [inputItem, setInputItem] = useState("");
  const [itensValue, setItensValue] = useState([]);
  const [itensWeight, setItensWeight] = useState([]);
  const [progress, setProgress] = useState();
  const [userValue, setUserValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [answer, setAnswer] = useState([]);

  const [plasma, setPlasma] = useState(false);
  const [cristalV, setCristalV] = useState(false);
  const [cubo, setCubo] = useState(false);
  const [nucleo, setNucleo] = useState(false);
  const [fragmento, setFragmento] = useState(false);
  const [disco, setDisco] = useState(false);
  const [cristalH, setCristalH] = useState(false);
  const [amuleto, setAmuleto] = useState(false);

  const [showWinAlert, setShowWinAlert] = useState(false);
  const [showLoseAlert, setShowLoseAlert] = useState(false);
  const [showFullAlert, setShowFullAlert] = useState(false);
  const [itemAddedAlert, setItemAddedAlert] = useState(false);

  const handleRegister = () => {
    let value = userValue;
    let completed = progress;
    let userArray = userAnswer;

    switch (inputItem) {
      case "plasma":
        if (completed + itensWeight[0] <= 100 && !plasma) {
          completed += itensWeight[0];
          value += itensValue[0];
          setPlasma(true);
          userArray.push(inputItem);
        } else if(plasma) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[0] > 100) {
          setShowFullAlert(true)
        }

        break;
      case "cristalV":
        if (completed + itensWeight[1] <= 100 && !cristalV) {
          completed += itensWeight[1];
          value += itensValue[1];
          setCristalV(true);
          userArray.push(inputItem);
        } else if(cristalV) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[1] > 100) {
          setShowFullAlert(true)
        }


        break;
      case "cubo":
        if (completed + itensWeight[2] <= 100 && !cubo) {
          completed += itensWeight[2];
          value += itensValue[2];
          setCubo(true);
          userArray.push(inputItem);
        } else if(cubo) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[2] > 100) {
          setShowFullAlert(true)
        }


        break;
      case "nucleo":
        if (completed + itensWeight[3] <= 100 && !nucleo) {
          completed += itensWeight[3];
          value += itensValue[3];
          setNucleo(true);
          userArray.push(inputItem);
        }  else if(nucleo) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[3] > 100) {
          setShowFullAlert(true)
        }


        break;
      case "fragmento":
        if (completed + itensWeight[4] <= 100 && !fragmento) {
          completed += itensWeight[4];
          value += itensValue[4];
          setFragmento(true);
          userArray.push(inputItem);
        }  else if(fragmento) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[4] > 100) {
          setShowFullAlert(true)
        }


        break;
      case "disco":
        if (completed + itensWeight[5] <= 100 && !disco) {
          completed += itensWeight[5];
          value += itensValue[5];
          setDisco(true);
          userArray.push(inputItem);
        } else if(disco) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[5] > 100) {
          setShowFullAlert(true)
        }


        break;
      case "cristalH":
        if (completed + itensWeight[6] <= 100 && !cristalH) {
          completed += itensWeight[6];
          value += itensValue[6];
          setCristalH(true);
          userArray.push(inputItem);
        } else if(cristalH) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[6] > 100) {
          setShowFullAlert(true)
        }


        break;
      case "amuleto":
        if (completed + itensWeight[7] <= 100 && !amuleto) {
          completed += itensWeight[7];
          value += itensValue[7];
          setPlasma(true);
          userArray.push(inputItem);
        } else if(amuleto) {
          setItemAddedAlert(true)
        } else if(completed + itensWeight[7] > 100) {
          setShowFullAlert(true)
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
    setPlasma(false);
    setCristalV(false);
    setCubo(false);
    setNucleo(false);
    setFragmento(false);
    setDisco(false);
    setCristalH(false);
    setAmuleto(false);
    setAnswer(knapsack(generateProblem(), 100));
  };

  const handleEmpty = () => {
    setProgress(0);
    setUserValue(0);
    setUserAnswer([]);
    setPlasma(false);
    setCristalV(false);
    setCubo(false);
    setNucleo(false);
    setFragmento(false);
    setDisco(false);
    setCristalH(false);
    setAmuleto(false);
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
      { name: "plasma", weight: weight[0], value: value[0] },
      { name: "cristalV", weight: weight[1], value: value[1] },
      { name: "cubo", weight: weight[2], value: value[2] },
      { name: "nucleo", weight: weight[3], value: value[3] },
      { name: "fragmento", weight: weight[4], value: value[4] },
      { name: "disco", weight: weight[5], value: value[5] },
      { name: "cristalH", weight: weight[6], value: value[6] },
      { name: "amuleto", weight: weight[7], value: value[7] },
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
        <h1>Space Transport S.A.</h1>
      </div>

      <div className="description-container">
          <p className="description">
            Bem-vindo(a) ao Space Transports S.A.! uma empresa de transportes espacias e esta aplicação serve para auxiliar
            os funcionários a encher as nossas naves de transporte de maneira que transportamos os itens e garantimos o maior lucro.
            Utilizamos o Knapsack Problem com Programação Dinâmica para determinar a forma mais lucrativa de obter PAX com o espaço disponível na nave.
            Mas queremos que você faça isso sozinho(a)! Escolha os itens que você deseja colocar na nave,
            respeitando a capacidade máxima, e vamos mostrar o quanto irá receber por isso,
            se você alcançar o lucro máximo com os itens, você ganha um aumento!
          </p>
      </div>

      <div className="item-container">
        <Item
          type={"Plasma Sintético de Nebulosa"}
          value={itensValue[0]}
          weight={itensWeight[0]}
          image={SciFiBarrel}
        />
        <Item
          type={"Cristal de Vórtice Quântico"}
          value={itensValue[1]}
          weight={itensWeight[1]}
          image={SciFiCargo}
        />
        <Item
          type={"Cubo de Antimatéria Anunnaki"}
          value={itensValue[2]}
          weight={itensWeight[2]}
          image={SciFiContainer1}
        />
        <Item
          type={"Núcleo de Energia Psíquica Psiloniano"}
          value={itensValue[3]}
          weight={itensWeight[3]}
          image={SciFiContainer2}
        />
        <Item
          type={"Fragmento de Lua Errante"}
          value={itensValue[4]}
          weight={itensWeight[4]}
          image={SciFiContainer1}
        />
        <Item
          type={"Disco de Gravidade Zero"}
          value={itensValue[5]}
          weight={itensWeight[5]}
          image={SciFiContainer2}
        />
        <Item
          type={"Cristal Harmonizador Hiperespacial"}
          value={itensValue[6]}
          weight={itensWeight[6]}
          image={SciFiCargo}
        />
        <Item
          type={"Amuleto Gravitacional Grithorian"}
          value={itensValue[7]}
          weight={itensWeight[7]}
          image={SciFiBarrel}
        />
      </div>

      <div className="handle-game">
        <p>Ocupação da Nave:</p>
        <LinearProgress variant="determinate" value={progress} />
        <p>{progress}%</p>

        <div className="selection-container">
          <label htmlFor="item"><h3>Selecione o Item que quer adicionar:</h3></label>
          <select
            id="item"
            name="item"
            onChange={(e) => setInputItem(e.target.value)}
          >
            <option value="plasma">Plasma Sintético de Nebulosa</option>
            <option value="cristalV">Cristal de Vórtice Quântico</option>
            <option value="cubo">Cubo de Antimatéria Anunnaki</option>
            <option value="nucleo">Núcleo de Energia Psíquica Psiloniano</option>
            <option value="fragmento">Fragmento de Lua Errante</option>
            <option value="disco">Disco de Gravidade Zero</option>
            <option value="cristalH">Cristal Harmonizador Hiperespacial</option>
            <option value="amuleto">Amuleto Gravitacional Grithorian</option>
          </select>
        </div>

        <button onClick={() => handleRegister()}>Adicionar</button>

        <div className="handle-result">
          <p> PAX Coins: {userValue} </p>
          <div className="button-container">
            <button onClick={() => handleEmpty()}> Esvaziar a Nave </button>
            <button onClick={() => handleCheck()}> Verificar Resultado </button>
            <button onClick={() => handleReset()}> Reiniciar </button>
          </div>

          {showWinAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" onClose={() => setShowWinAlert(false)}>
                Parabéns! Você ganhou um aumento!{" "}
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
                Que pena, seu desempenho é mediano{" "}
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
                Passou da capacidade da nave{" "}
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
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
