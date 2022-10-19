// 2nd different page that renders only the kiwi image.
import Heading from './components/Heading';
import KiwiImage from './components/KiwiImage';

const heading = new Heading();
const kiwiImage = new KiwiImage('kiwi');
heading.render('kiwi');
kiwiImage.render();

if (process.env.NODE_ENV === 'production') {
	console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
	console.log('Development mode');
}
