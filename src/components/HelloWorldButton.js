class HelloWorldButton {
   render() {
    const button = document.createElement('button');
    button.innerHTML = "Hello world";
    const body = document.querySelector('body');
    body.appendChild(button);
   }
}

export default HelloWorldButton;