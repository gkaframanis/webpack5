import './Heading.scss';
import $ from 'jquery';

// We use jquery instead of vanilla JS for the heading.
class Heading {
	render(pageName) {
		const h1 = $('<h1>');
		const body = $('body');
		h1.text('Webpack is awesome. This "' + pageName + '" page"');
		body.append(h1);
	}
}

export default Heading;
