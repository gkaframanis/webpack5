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

Plugins are additional JS libraries that do everything that loaders cannot do.
They can also modify how the bundles are created. 

- ***TerserPlugin*** is already installed with Webpack v5 and it's used to minimize the size of our bundle.js file.

### How to extract our CSS into a separate file
- Not great for production to have them all in one bundle.js file. (js + css)
- JS bundle becomes smaller ==> faster to download.
- Multiple files to download in parallel is now available.
- ***MiniCssExtractPlugin*** ==> **npm i mini-css-extract-plugin --save-dev**
  - Extracts the styles from the whole application and puts them inside a single CSS file under the dist folder.

### Browser Caching
Every time our browser loads a website, it downloads all the assets required (CSS, JS). If the file doesn't change during reloads the browser can save it in a specific place ==> ***cache*** ==> the file won't be downloaded again.

- To update the cached file ==> mechanism to create a new file with a new name that contains the changes. The browsers remember files by name. Webpack can do this automatically.
- One of the best practices is to add md5 hash to the name of the file. This md5 hash depends on the contents of the file. Webpack will generate the new filename only if there were some changes inside.
- ***npm install --save-dev clean-webpack-plugin***
  - By default this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
  - We can also configure it to remove files from other folders as well by passing inside the plugin the parameter:
      {
            cleanOnceBeforeBuildPatterns: [
                '**/*', // default if we don't modify it
                // To remove everything inside build and its subfolders
                path.join(process.cwd(), 'build/**/*')
            ]
        }
- Instead of this plugin we can use ***output.clean*** option for webpack > 5.2.

### Html file to include the MD5 hashes.
- ***HTML Webpack plugin*** to update automatically the names of the files.
- It can also create the whole HTML file for us.
- ***npm i html-webpack-plugin --save-dev***
- We need now to fix our bundles since now the html file is also in the dist folder.

#### Customize the HTML we generate.
We can pass options to the HTML Webpack plugin to customize it.

#### Integration with handlebars.
Handlebars is a template engine for JS that allows you to separate the business logic from presentation.

- ***npm i --save-dev handlebars-loader***
- ***npm i --save-dev handlebars***

## Production vs Development Builds

- ***mode*** option
  - ***none*** ==> no built-in optimizations
  - ***development***
    - webpack dev server package ==> ***npm i webpack-dev-server --save-dev***
    - To get the changes in the browser without running webpack manually.
  - ***production*** ==> enables a long list of different plugins, including TerserPlugin.

## Multiple Page Applications
We have two different JS files that represent two different entry points.  
We want webpack two create two separate JS bundles out of those two files.

- We change the entry inside the webpack file.

### Extracting common dependencies
Eg. use of lodash library in both pages.
- Webpack has a built-in feature that can extract lodash and any other common dependency into its own bundle, so we don't have to re-download it every time there is a change to our pages.
- ***npm i react --save***
- By default webpack extracts common dependencies only when they exceed 30 kb before minification. That's way react isn't extracted to a separate bundle. We can change the 30kb number.

## Integrating Express into our application

### For Single Page Application.
- Created the ***server.js*** file.
- ***npm i express --save***
- Add script to package.json

### Serving HTML pages via express
- We need to read the contents of the HTML file into a JS variable and then send this JS string to the browser.
- index.js file, webpack.single.config.js file and single-build script.

#### Handling JS and CSS with express.
Set publicPath to static.

## Two separate application (helloWorld and kiwi)
- We will have two different boards for each one of them, so different dev ports.

### Module federation
- Introduced in Webpack v5.
- Allows one application to dynamically load modules from another application
- So two applications can share code between each other at runtime.
- ***git checkout feature/split-into-two-applications***

## Microfrontends
- ***git checkout feature/microfrontends***
- ***npm i webpack webpack-cli webpack-dev-server mini-css-extract-plugin html-webpack-plugin clean-webpack-plugin babel-loader @babel/core @babel/preset-env --save-dev***
- ***npm i express --save***