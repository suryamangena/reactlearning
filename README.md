# React Learning 

## Projects

1) MyReads. Create a virtual bookcase to store your books and track what you're reading.Using the provided Books API, you’ll search for books and add them to a bookshelf as a React component. Finally, you’ll use React's setState to build the functionality to move books from one shelf to another.
2) Readable application, users can post text content and comment on each other's posts. You’ll build this dynamic application from scratch while combining the state management features of Redux with the declarative component model from React. When complete, you’ll be able to submit your own posts, comment on existing posts, and edit and delete posts and comments.
3) Contacts app to add, edit, remove, search contacts


## What makes React Special?
1) Its compositional model 
    Composition is fairly easy to understand - we can see composition in everyday life: a chair has legs, a wall is composed of bricks and mortar, and so on. The purpose of composition is obvious: make wholes out of parts
2) Its declarative nature
    First off, from a very high level, declarative programming focuses on the WHAT rather than the HOW
    In React, you only need to describe the final state of your UI in the render() method, without worrying about how to transition from previous UI state to the new UI state. E.g.,
    On the other hand, JQuery requires you to transition your UI state imperatively, e.g, selecting the label elements and update their text and CSS:
    Declarative programming is much more driven by the result and describing this end result rather than the step by step process of getting to the result
    Reference: https://medium.com/@myung.kim287/declarative-vs-imperative-251ce99c6c44
3) The way data flows through a component
4) And React is really just javaScript 

## Composition:
In React, functions take arguments and return UI 
Building complex functions just by combining simple ones together. Remember that composition is just combining simple functions together to create complex functions. These ingredients are:
a) simple functions
b) combined to create another function
c) A good function should follow the "DOT" Do One Thing rule

## Composition Recap
Composition occurs when simple functions are combined together to create more complex functions. Think of each function as a single building block that does one thing (DOT). When you combine these simple functions together to form a more complex function, this is composition.

## Declarative vs Imperative 
React does the imperative work keeping dom in sync with app. 
JavaSctipt code is written imperatively, we tell JavaScript exactly what to do and how to do it.
1) Imperative Code:
```
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
const excitedPeople = []

for (let i = 0; i < people.length; i++) {
 excitedPeople[i] = people[i] + '!'
}
```
2) Declarative Code:
```
const excitedPeople = people.map(name => name + '!')
```

## Declarative Code Recap
Imperative code instructs JavaScript on how it should perform each step. With declarative code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps.

React is declarative because we write the code that we want, and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.


## Unidirectional Data Flow:
## Data Bindings:
Before React one popular technique for managing state changes in app over time is data bindings.
Data-Binding In Other Frameworks
Front-end frameworks like Angular and Ember make use of two-way data bindings. In two-way data binding, the data is kept in sync throughout the app no matter where it is updated. If a model changes the data, then the data updates in the view. Alternatively, if the user changes the data in the view, then the data is updated in the model. Two-way data binding sounds really powerful, but it can make the application harder to reason about and know where the data is actually being updated

Two Way Data Bindings is becomes difficult to track the changes of state. React uses explicit method for passing data between components that makes it a lot easier to track changes to the state and how they effect other places of app. This is unidirectional, as data flow from parent elements to children. Data Updates are sent to the parent component where the parent performs the actual change.

In the image above, we have two components:
### [Data Flow Diagram](./imgs/data-flow-react.png)
a parent component
a child component
The data lives in the parent component and is passed down to the child component. Even though the data lives in the parent component, both the parent and the child components can use the data. However, if the data must be updated, then only the parent component should perform the update. If the child component needs to make a change to the data, then it would send the updated data to the parent component where the change will actually be made. Once the change _is_ made in the parent component, the child component will be passed the data (that has just been updated!).

Now, this might seem like extra work, but having the data flow in one direction and having one place where the data is modified makes it much easier to understand how the application works.

## Functional Programming
React builds on a lot of the techniques of functional programming...techniques that you'll learn as you go through this program. However, there are a couple of important JavaScript functions that are vital to functional programming that we should look at. These are the Array's .map() and .filter() methods

## .map or .filter
.map() the .filter() method returns a new array instead of modifying the original array:

## Combining .map() And .filter() Together
What makes .map() and .filter() so powerful is that they can be combined. Because both methods return arrays, we can chain the method calls together so that the returned data from one can be a new array for the next.
```
const names = ['Karen', 'Richard', 'Tyler'];

const shortNamesLengths = names.filter( name => name.length < 6 ).map( name => name.length );
```
To break it down, the names array is filtered, which returns a new array, but then .map() is called on that new array, and returns a new array of its own! This new array that's returned from .map() is what's stored in shortNamesLengths.

.filter() First!
**On a side note, you'll want to run things in this order (.filter() first and then .map()). Because .map() runs the function once for each item in the array, it will be faster if the array were already filtered.**

## React is Just JavaScript Recap
React builds on what you already know - JavaScript! You don't have to learn a special template library or a new way of doing things.

Two of the main methods that you'll be using quite a lot are:

.map()
.filter()
It's important that you're comfortable using these methods, so take some time to practice using them. Why not look through some of your existing code and try converting your for loops to .map() calls or see if you can remove any if statements by using .filter().

## React Sandbox
https://codesandbox.io/s/wandering-morning-fqp3c?file=/src/index.js:0-289


## [React UI Intro](./docs/react-ui.md)
## [Creating Elements JSX](./docs/creating-elements-jsx.md)
## [Creating React App](./docs/creating-react-app.md)
## [State Management](./docs/state-management.md)
## [LifeCycle Events](./docs/life-cycle-events.md)

## Exercises
1) [Exercise-1](./exercise/exe-1/exe-1.md)
2) [Exercise-2](./exercise/exe-2/exe-2.md)
3) [Exercise-3](./exercise/exe-3/exe-3.md)
4) [Exercise-4](./exercise/exe-3/exe-4.md)
4) [Exercise-5](./exercise/exe-3/exe-5.md)


## [Redux](./docs/redux/redux.md)

## [Redux Middleware](./docs/redux/redux-middleware/redux-middleware.md)

## [Redux with React](./docs/redux/redux-with-react/redux-with-react.md)

## [Asynchronous Redux](./docs/redux/asynchronous-redux/asynchronous-redux.md)

## [Thunk](./docs/redux/thunk/thunk.md)

## [Context API](./docs/redux/react-redux-context/react-redux-context.md)







