
## Create Element
I just used React's .createElement() method to construct a "React element". The .createElement() method has the following signature:
```
React.createElement( /* type */, /* props */, /* content */ ); 
```
Let's break down what each item can be:

type – either a string or a React Component

This can be a string of any existing HTML element (e.g. 'p', 'span', or 'header') or you could pass a React component (we'll be creating components with JSX, in just a moment).

props – either null or an object

This is an object of HTML attributes and custom data about the element.

content – null, a string, a React Element, or a React Component

Anything that you pass here will be the content of the rendered element. This can include plain text, JavaScript code, other React elements, etc.

## Nesting 
## List in nesting 
```
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', null,
    React.createElement('li',null,'surya'),
    React.createElement('li',null,'suresh')
)

ReactDOM.render(element,document.getElementById('root'))
```

## Using javascript in content of create element
```
import React from "react";
import ReactDOM from "react-dom";

const persons = [{name:'surya'}, {name:'surya'},{name:'surya'},];
const element = React.createElement(
  "div",
  null,
  persons.map(person=>React.createElement("li", {key:person.name}, person.name))
);

ReactDOM.render(element, document.getElementById("root"));

```

## .createElement() Returns One Root Element
Recall that React.createElement(); creates a single React element of a particular type. We'd normally pass in a tag such as a <div> or a <span> to represent that type, but the content argument can be another React element!

Consider the following example:

const element = React.createElement('div', null,
 React.createElement('strong', null, 'Hello world!')
);
Here, "Hello world!" will be wrapped in a <div> when this React element renders as HTML. While we can indeed nest React elements, remember the overall call just returns a single element.

**Creating nested elements becomes tedious in big program, to handle this jsx got into place**

## JSX
JSX allows to write the nested Relationship of elements in a natural way. JSX is syntax extension of JavaScript that let us write JavaScript code that looks a little bit more like HTML, making it more concise and easier to follow. 
```
import React from "react";
import ReactDOM from "react-dom";

const persons = [{ name: "surya" }, { name: "surya1" }, { name: "surya2" }];
const element = <kl>{persons.map(person=> (<li key={person.name}>{person.name}</li>))}</kl>;

ReactDOM.render(element, document.getElementById("root"));
```
**Angle braces codes is jsx. Curly braces is JavaScript code**

## JSX Returns One Main Element, Too
When writing JSX, keep in mind that it must only return a single element. This element may have any number of descendants, but there must be a single root element wrapping your overall JSX (typically a <div> or a <span>). Check out the following example:
```
const message = (
 <div>
 <h1>All About JSX:</h1>
 <ul>
 <li>JSX</li>
 <li>is</li>
 <li>awesome!</li>
 </ul>
 </div>
);
```

See how there's only one <div> element in the code above and that all other JSX is nested inside it? This is how you have to write it if you want multiple elements. To be completely clear, the following is incorrect and will cause an error:
```
const message = (
 <h1>All About JSX:</h1>
 <ul>
 <li>JSX</li>
 <li>is</li>
 <li>awesome!</li>
 </ul>
);
```
In this example, we have two sibling elements that are both at the root level (i.e. <h1> and <ul>) . This won't work and will give the error:
**Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag**

Since we know that JSX is really just a syntax extension for .createElement(), this makes sense; .createElement() takes in only one tag name (as a string) as its first argument.

## Components
Components are used to construct our UI. Components refer to reusable pieces of code ultimately responsible for returning HTML to be rendered onto the page. you'll see React components written with JSX.

Since React's main focus is to streamline building our app's UI, there is only one method that is absolutely required in any React component class: render().

React provides a base component class that we can use to group elements together and use them as if they were one element. React component as the factories that we use to create React Elements. By building custom components or classes, we can easily generate our own custom elements. 

## Declaring Components in React
```
class ContactList extends React.Component {
// ...
}
```
In real-world use (and throughout this course), you may also see declarations like:
```
class ContactList extends Component {
// ...
}
```
Both ways are functionally the same, but be sure your module imports match accordingly! That is, if you choose to declare components like the example directly above, your import from React will now look like:
```
import React, { Component } from 'react';
```
## Example
```
import React, { Component } from "react";
import ReactDOM from "react-dom";

class ContactList extends Component {
  render() {
    const persons = [{ name: "surya" }, { name: "surya1" }, { name: "surya2" }];

    return (
      <ol>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ol>
    );
  }
}


ReactDOM.render(<ContactList/>, document.getElementById("root"));

```
