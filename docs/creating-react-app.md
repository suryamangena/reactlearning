## Software Installation
1) NodeJS

## Scaffolding Your React App
JSX is awesome, but it does need to be transpiled into regular JavaScript before reaching the browser. We typically use a transpiler like Babel to accomplish this for us. We can run Babel through a build tool, like Webpack which helps bundle all of our assets (JavaScript files, CSS, images, etc.) for web projects.

## Install create-react-app package
npm install -g create-react-app

## Create contacts project 
npx create-react-app contacts

## npm vs npx 
1) npm is package manager 
2) npx is package executer or runner

## Yarn vs NPM
Yarn is a package manager that's similar to NPM. Yarn was created from the ground up by Facebook to improve on some key aspects that are slow or lacking in NPM.

## create-react-app
create-react-app package comes with babel, webpack, eslint configuration and this ensure having the stable updates

## Components
1) Allows us to break the code into smaller parts
2) Allows us to use Composition over the inhertiance 
3) Each Component gets dot props where can pass properties using it

## Favor Composition Over Inheritance
You might have heard before that it’s better to “favor composition over inheritance”. This is a principle that I believe is difficult to learn today. Many of the most popular programming languages make extensive use of inheritance, and it has carried over into popular UI frameworks like the Android and iOS SDKs.

In contrast, React uses composition to build user interfaces. Yes, we extend React.Component, but we never extend it more than once. Instead of extending base components to add more UI or behavior, we compose elements in different ways using nesting and props. You ultimately want your UI components to be independent, focused, and reusable.

So if you’ve never understood what it means to “favor composition over inheritance” you’ll definitely learn using React!





