import "./App.scss";
import goldendiceset from './images/Golden_DiceSet.png'
import mickeydiceset from './images/Mickey_DiceSet.jpg'

import Home from "./pages/home.component";

const App = () => {
  const displays = [
    { id: 1, name: "SETS DO SEMESTRE" },
    { id: 2, name: "SETS PROMOCIONAIS" },
    { id: 3, name: "SETS DE TEMPORADA" },
  ];
  const products = [
    {
      id: 1,
      title: "hats",
      imageUrl: goldendiceset,
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: mickeydiceset,
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://picsum.photos/id/239/300/300",
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://picsum.photos/id/310/300/300",
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
  ];

  return (
    <div>
      <Home products={products} displays={displays} />
    </div>
  );
};

export default App;
