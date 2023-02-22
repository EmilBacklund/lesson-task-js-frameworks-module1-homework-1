const Button = () => {
  function onButtonClick() {
    console.log('Button clicked');
  }
  return (
    <>
      <button onClick={onButtonClick}>Click me</button>
    </>
  );
};

export default Button;
