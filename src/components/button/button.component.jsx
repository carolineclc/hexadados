import "./button.style.scss"

const Button = ({text}) => {
    function sayHello() {
        alert("You clicked me!");
      }
  return (
    <button className="display-button" onClick={sayHello}>
      <h2>{text}</h2>
    </button>
  );
};

export default Button;
