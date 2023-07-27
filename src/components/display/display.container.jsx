const Display = ({ products }) => {
  return (
    <div className="display-container">
      {products.map((product) => {
        return (
          <div className="display-product-container" key={product.id}>
            <div
              className="display-image"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}
            />
            <div className="display-description">
              <h2 className="name">{product.name}</h2>
              <h3 className="price">{product.price}</h3>
              <h4 className="description">{product.description}</h4>
            </div>
            
          </div>
          
        );
      })}
    </div>
  );
};

export default Display;
