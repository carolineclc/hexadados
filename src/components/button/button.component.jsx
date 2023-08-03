import "./button.style.scss"

const Button = ({text}) => {
    function sayHello() {
        alert("You clicked me!");
      }
  return (
    <button className="button" onClick={sayHello}>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
