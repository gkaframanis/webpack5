import Kiwi from './kiwi.jpg';
import './KiwiImage.css';

class KiwiImage {
	render() {
		const img = document.createElement('img');
		img.src = Kiwi;
		img.alt = 'Kiwi';
		img.classList.add('kiwi-image');

		const body = document.querySelector('body');
		body.appendChild(img);
	}
}

export default KiwiImage;
