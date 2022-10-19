// We are going to render these component pages based on the url the user entered to the browser. (without domain & port)
const url = window.location.pathname;

// Using dynamic import 
if (url == '/hello-world-page') {
    import("HelloWorldApp/HelloWorldPage").then(HelloWorldPageModule => {
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    });
} else if (url == '/kiwi-page') {
    import("KiwiApp/KiwiPage").then(KiwiPageModule => {
        const KiwiPage = KiwiPageModule.default;
        const kiwiPage = new KiwiPage();
        kiwiPage.render();
    });
}