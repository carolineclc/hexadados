
import Button from "../button/button.component";
import "./projector.style.scss";
import projector from "../../images/turquoiseCrystal_DiceSet.jpg";

const Projector = () => {
  return (
    <div className="projector">


      <div
        className="image"
        style={{
          backgroundImage: `url(${projector})`,
        }}
      />
      <h1 className="announcement">AVISO IMPORTANTE AVISO IMPORTANTE!</h1>
      <Button className="button" text={"Veja Agora"} />
    </div>
  );
};

export default Projector;
