// 2nd different page that renders only the kiwi image.
import Heading from "./components/Heading";
import KiwiImage from "./components/KiwiImage";
import _ from "lodash";

const heading = new Heading();
const kiwiImage = new KiwiImage(_.upperFirst("kiwi"));
heading.render();
kiwiImage.render();

if (process.env.NODE_ENV === 'production') {
    console.log("Production mode");
} else if (process.env.NODE_ENV === 'development') {
    console.log("Development mode");
}