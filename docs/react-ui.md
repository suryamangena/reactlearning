## React
React uses javascript objects to build the user interface instead of using the string templates. This is the fundamental difference between React and other JavaScript frameworks.

React elements this lightweight JavaScript objects not actual DOM nodes, we use these elements to describe what the page should look like and then let React do hard part of actually manipulating the DOM. We can even create our own custom elements called components, that we can use to nearly encapsulate group of elements and behavior. These components are the building blocs of React.
```
{
    type:'div',
    content:'Karen'
},
{
    type:'div',
    content:'Richard'
}
```

## Creating Elements and JSX

React is an extension of JavaScript (i.e., a JavaScript library), but it isn't built into your browser. You wouldn't be able to test out React code samples in your browser console the way you would if you were learning JavaScript. In just a bit, we'll see how to install and use a React environment!

## React DOM
React DOM is one way to use the React library. In React, processor will decide what to render is completely decoupled from actually rendering it.
1) Render on the server
2) native devices
3) VR environments
```
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', null,'hello world')
console.log(element) -> It is plain javascript object

ReactDOM.render(element,document.getElementById('root'))
```

## Rendering Elements onto the DOM
In the previous video, we used ReactDOM's render() method to render our element onto a particular area of a page. In particular, we rendered the element onto a DOM node called root. But where did this root come from?

Apps built with React typically have a single root DOM node. For example, an HTML file may contain a <div> with the following:
```
<div id="root"></div>
```
By passing this DOM node into getElementById(), React will end up controlling the entirety of its contents. Another way to think about this is that this particular <div> will serve as a "hook" for our React app; this is the area where React will take over and render our UI!

## Give a properties to tag
```
import React from 'react'
import ReactDOM from 'react-dom'
#Error one
const element = React.createElement('div', {
    class: 'welcome-message' -> this give error because react uses the DOM nodes not the html nodes. so it is className. Error is invalid DOM node
},'hello world')
# Correct one
const element = React.createElement('div', {
    className: 'welcome-message' -> This is dom nodes
},'hello world')
console.log(element) -> It is plain javascript object

ReactDOM.render(element,document.getElementById('root'))
```

## Virtual DOM 
Objects that describe real DOM nodes. createElement will not create real dom nodes until it has render browser will not create dom nodes. So these are virtual doms

## All Supported HTML attributes
https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes

## For attribute 
An interesting thing to note is that you can't use the default for attribute. Just like you have to use className instead of class, you have to use htmlFor instead of for. This is because 'for' is a reserved word in JavaScript.









