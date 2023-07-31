import Button from "../button/button.component";
import "./display.style.scss";

const Display = ({ products, displays }) => {
  return (
    <div>
      {displays.map((display) => (
        <div className="display">
          <h1 className="display-title">{display.name}</h1>
          <div className="display-container">
            {products.map((product) => {
              return (
                <div className="display-product-container" key={product.id}>
                  <div className="display-image">
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${product.imageUrl})`,
                      }}/>
                  </div>
                  <div className="display-description">
                    <h2 className="name">{product.name}</h2>
                    <h3 className="price">{product.price}</h3>
                    <h4 className="description">{product.description}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <Button text={"Veja Todos"} />
        </div>
      ))}
    </div>
  );
};

export default Display;
