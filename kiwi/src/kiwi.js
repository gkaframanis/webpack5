// 2nd different page that renders only the kiwi image.
import Heading from "./components/Heading";
import KiwiImage from "./components/KiwiImage";

const heading = new Heading();
const kiwiImage = new KiwiImage("kiwi");
heading.render('kiwi');
kiwiImage.render();

// We import the HelloWorldButton dynamically at runtime.
import('HelloWorldApp/HelloWorldButton')
    .then(HelloWorldButtonModule => {
        const HelloWorldButton = HelloWorldButtonModule.default;
        const helloWorldButton = new HelloWorldButton();
        helloWorldButton.render();

    });

if (process.env.NODE_ENV === 'production') {
    console.log("Production mode");
} else if (process.env.NODE_ENV === 'development') {
    console.log("Development mode");
}