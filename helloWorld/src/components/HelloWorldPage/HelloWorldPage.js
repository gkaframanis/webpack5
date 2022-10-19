// ECMAScript modules
import HelloWorldButton from "../HelloWorldButton";
import Heading from "../Heading";

class HelloWorldPage {
    render() {
        const helloWorldButton = new HelloWorldButton();
        const heading = new Heading();
        heading.render("hello world");
        helloWorldButton.render();
    }
}

export default HelloWorldPage;