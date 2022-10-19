// 2nd different page that renders only the kiwi image.
import Heading from "../Heading";
import KiwiImage from "../KiwiImage";

class KiwiPage {
    render() {
        const heading = new Heading();
        const kiwiImage = new KiwiImage("kiwi");
        heading.render('kiwi');
        kiwiImage.render();

        import('ImageCaptionApp/ImageCaption').then(ImageCaptionModule => {
            const ImageCaption = ImageCaptionModule.default;
            const imageCaption = new ImageCaption();
            imageCaption.render("Kiwifruit is oval, about the size of a large egg");
        })
    }
}

export default KiwiPage;
