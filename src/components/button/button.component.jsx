import "./button.style.scss"

const Button = ({text}) => {
    function sayHello() {
        alert("You clicked me!");
      }
  return (
    <button className="display-button" onClick={sayHello}>
      <span className="display-button-text">{text}</span>
    </button>
  );
};

export default Button;
