// ECMAScript modules
import HelloWorldButton from "./components/HelloWorldButton";
import Heading from "./components/Heading";
import addImage from "./add-image";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render();
helloWorldButton.render();
addImage();