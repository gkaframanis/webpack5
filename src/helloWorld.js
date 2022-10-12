// ECMAScript modules
import HelloWorldButton from "./components/HelloWorldButton";
import Heading from "./components/Heading";
import _ from 'lodash';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render(_.upperFirst("hello world"));
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log("Production mode");
} else if (process.env.NODE_ENV === 'development') {
    console.log("Development mode");
}