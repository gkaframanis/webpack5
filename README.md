# Webpack 5

Webpack is a static module bundler for modern JavaScript applications.  
When Webpack processes our application, it recursively builds a dependency graph  
that includes every module in our application and then packages all of those  
modules into one or more bundles.

- We have one file for JS to include in the html file, there are no hidden   dependencies and we don't have to worry anymore for the correct order of the files.
- We have also one file for CSS to include.
- Webpack is single tool for managing all our code as well as our assets in one place.
- It can handle JS, TS, CoffeeScript, CSS, Sass, Less, images, fonts etc

***npm install webpack webpack-cli --save-dev***

- webpack: contains the core functionality of webpack
- webpack-cli: command line tool, used to run webpack from the terminal.

When using webpack we only need on JS file that will include all our code in html.
- We import and export based on ECMAScript modules
- We run webpack: ***npx webpack*** (uses the default conf, unless we provide a custom one)
- ***npx webpack --stats detailed*** ==> tells webpack to print more details about the build process

