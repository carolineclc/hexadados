import "./App.scss";
import Display from "./components/display/display.container";

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
      imageUrl: "https://picsum.photos/id/237/200/300",
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://picsum.photos/id/238/200/300",
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://picsum.photos/id/239/200/300",
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://picsum.photos/id/310/200/300",
      name: "Hexa Dados",
      description: "Descricao breve Descricao breve Descricao breve",
      price: "R$ 150",
    },
  ];

  return (
    <div>
      <div className="projector"><h1>Image Test</h1></div>
      <Display products={products} displays={displays} />
    </div>
  );
};

export default App;
