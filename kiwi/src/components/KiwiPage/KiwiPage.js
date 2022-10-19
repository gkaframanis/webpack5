// 2nd different page that renders only the kiwi image.
import Heading from "../Heading";
import KiwiImage from "../KiwiImage";

class KiwiPage {
    render() {
        const heading = new Heading();
        const kiwiImage = new KiwiImage("kiwi");
        heading.render('kiwi');
        kiwiImage.render();
    }
}

export default KiwiPage;
