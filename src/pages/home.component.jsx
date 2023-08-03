import Display from "../components/display/display.container";
import Header from "../components/header/header.component";
import Projector from "../components/projector/projector.component";
import "./home.style.scss";


const Home = ({products, displays}) => {
  return (
    <div className="homepage">
      <Header />
      <Projector />
      <Display products={products} displays={displays} />
    </div>
  );
};

export default Home;
