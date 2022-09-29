# Webpack 5

## Introduction && Initial Setup

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

## Asset Modules

Webpack allows you to import lots of different stuff into your JS code.
It's possible due to a couple of great features that Webpack provides:
1. Asset modules
2. Loaders

Asset Modules allows you to easily use asset files in your JS code without
installing additional dependencies.
- images
- fonts
- text files

4 Types of Asset Modules: 
1. asset/resource (file into the output directory (large images, large font types))
   Instructs webpack to copy it to the output directory.
   Creates a separate file for every image we are using. Separate HTTP request for each image we need to display.
   By default webpack5 sets publicPath to 'auto'.
2. asset/inline (for SVG, injected, asset in line in bundle as data URI)
   It generates a base 64 representation of our file and bake it directly into the JS bundle. For small asset files mainly.
3. asset (combination of the previous two, webpack automatically chooses < 8kb inline else resource) ==> general asset type
   To change the 8kb ==> parser: {dataUrlCondition: {maxSize: 3 * 1024}}
4. asset/source ==> reads the contents of the file into a JS string and injects that string directly into the JS bundle as is without any modifications similarly to asset in line. It doesn't generate any file in the output directory.

We can import JS or JSON files without specifying additional rules.

## Loaders

Allow you to import all other kinds of files that you can't handle using Asset Modules.

### CSS

- The ***css-loader*** reads the contents of the CSS file and returns the contents, but it doesn't do anything else.
- The ***style-loader*** takes the CSS and injects to the page using style tags. It bundles our CSS together with our JS into a single bundle file.
- We can also generate them as separate them as separate files.
- ***npm install css-loader style-loader --save-dev***

### SASS

***npm i sass-loader sass --save-dev***

### Javascript files
To use the new ECMA features right away and not to wait till the browsers support them. There are tools that convert modern JS to older that is supported by the browsers.

#### Babel

***npm i babel @babel/core babel-loader @babel/preset-env --save-dev***

## Plugins