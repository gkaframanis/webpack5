import './HelloWorldButton.scss';

class HelloWorldButton {
	// class property which is not supported by most browsers
	buttonCssClass = 'hello-world-button';
	render() {
		const button = document.createElement('button');
		button.innerHTML = 'Hello world';
		const body = document.querySelector('body');
		button.onclick = function () {
			const p = document.createElement('p');
			p.innerHTML = 'Hello world';
			p.classList.add('hello-world-text');
			body.appendChild(p);
		};
		button.classList.add(this.buttonCssClass);
		body.appendChild(button);
	}
}

export default HelloWorldButton;
