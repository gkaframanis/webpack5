// ECMAScript modules
import HelloWorldButton from './components/HelloWorldButton';
import Heading from './components/Heading';

const heading = new Heading();
heading.render('hello world');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
	console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
	console.log('Development mode');
}
