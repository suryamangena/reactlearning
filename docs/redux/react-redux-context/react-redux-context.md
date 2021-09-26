## Connect and Provider
Getting the Store to Each Component
The first thing we want to do is improve how each component gets access to the store. If it's tough for a component to access the store, whether it's to get the state, listen to the state, or update the state, nothing else we do will matter. Right now we’re just passing the store down as a prop. It works fine enough in our small app, but what if we had a larger app with more layers to it? Passing the store down ten components deep wouldn't scale very well. One of the main points of having a store is to avoid passing props down through a bunch of components.

One reason React (talking about React for a moment, not Redux) is so popular is because it's very efficient. It's efficient in keeping state localized to a component, it's efficient in keeping UI confined to a component, and it's efficient in knowing when something has changed and re-rendering just that component. So the second thing we need need to figure out is how to re-render components only if the data they depend on (from the store) changes. Right now, we're solving this by calling getState at the root of our application and then passing the data down. Again, this won't scale well as our app grows.

*** If we can find a nice abstraction for getting the store to any component that needs it and only re-rendering components when the exact data they need change, we'll improve every aspect of our current codebase. *** 

## React context API 
Context allows passing data to the target child components without passing through all of the above components
Improves abstraction in React with Redux 
## Example without Context
Here passing name value to the target grandchild, we have to pass data all the way the throughout the Parent, Child
```
import React from 'react';
import { render } from 'react-dom';

function Parent ({ name }) {
  return (
    <div>
      <h1>Parent</h1>
      <Child name={name}/>
    </div>
  );
}

function Child ({ name }) {
  return (
    <div>
      <h1>Child</h1>
      <Grandchild name={name}/>
    </div>
  );
}

function Grandchild ({ name }) {
  return (
    <div>
      <h1>Grandchild</h1>
      <h3>Name: {name}</h3>
    </div>
  );
}

class App extends React.Component {
  render() {
    const name = 'Tyler';

    return (
      <Parent />
    );
  }
}

render(<App />, document.getElementById('root'));
```
The App component renders Parent, which renders Child, which renders Grandchild. However, what's important to notice here is that the Grandchild component wants to render name -- but the data for name lives inside the App component.

Because Grandchild is so deeply nested, we have to pass the name prop one-by-one from App through all the components until it reaches Grandchild. What's more: we must do this even if any of the components along the way (Parent and Child) aren't even concerned with the name data!

This process of "threading props" to send data to a child component can be tiresome, and perhaps even error-prone. Luckily, we can avoid it with React's Context API. To begin, we'll use React's createContext() function to return an object with a Provider as well as a Consumer.
```
const Context = React.createContext();
```
Let's now check out how Context.Provider and Context.Consumer make these interactions between components possible!

## Context.Provider
The Provider component is used in the upper level of the component tree; that is, the component from which the data to be passed is held. In our case, this was the App component. We passed the name data as the value of Provider's value prop:
```
class App extends React.Component {
  render() {
  const name = 'Tyler';

  return (
    <Context.Provider value={name}>
      <Parent />
    </Context.Provider>
    );
  }
}
```
## 
*** Note that the Provider component simply wraps around the entire component to be rendered! *** 

## Context.Consumer
On the receiving end (i.e., a component "under" the Provider in the component hierarchy), we use the Consumer component. In our example, we passed Consumer a function as a child. This function accepts a value and returns some JSX:
```
function Grandchild ({ name }) {
  return (
    <Context.Consumer>
      {(name) => (
      <div>
      <h1>Grandchild</h1>
      <h3>Name: {name}</h3>
      </div>
      )}
    </Context.Consumer>
  );
}
```
As a result, we were able to render the Grandchild component with the correct name data without ever having to pass that data down the entire component thread! That's a lot less code than the previous way we had to do it. So React's Context API provides a terse, approachable way to easily communicate information from one component to another.

Now, let's go ahead and utilize Context in our todos app.

*** Context provides a way to pass data through the component tree without having to pass props down manually at every level. *** 

## Container Component or Connected Component
It is connected to the store 
Container Component responsible how they work

## Presentation Component
Anything that render is in presentation component
Repsonsible for how they look 

In the previous video, I said both "Connected component" as well as "Container Component". These are different names that really mean the same thing - a component that is connected to the store. This is in contrast to a component that is just responsible for rendering UI content. We call these "Presentation Components". There are other names for a "Presentational Component", too.

The point of these names are to help explain what the purpose of the component is for:

A connected component is connected to the Redux store and is responsible for getting data from the store.
A presentational component should not access the store. It should receive any information it needs as props and then just render a UI.
Dan Abramov (the creator of Redux!) wrote a post about this very thing. Check it out if to get his take on these concepts: Presentational and Container Components

## https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

## Provider
Provider is really just a React component that we use to wrap the entire application. It takes in the store as a prop, then sets the store context, passing it down to all its subcomponents. All components wrapped by Provider will receive the store context. What differentiates containers from presentational components?

## Consumer
Consumer renders the component and passing the data that is needed by component


## Connect 
1) Know when the store changes - use store.subscriber
2) what state is needed - use mapStateToProps
3) get the Store from Context 

## Provider
With react-redux, rather than creating and using our own Provider which looks like this:
```
const Context = React.createContext()    

class Provider extends React.Component {    
  render () {    
  return (    
    <Context.Provider value={this.props.store}>    
      {this.props.children}    
    </Context.Provider>    
    );
  }    
}

ReactDOM.render(
  <Provider store={store}>
  <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
```
...we can simply use the Provider component defined by the react-redux package! This allows us to wrap our entire app with Provider, effectively passing the store to even the most deeply nested components.
```
ReactDOM.render(
 <ReactRedux.Provider store={store}>
 <ConnectedApp />
 </ReactRedux.Provider>,
 document.getElementById('app')
);
```
## connect()
Similarly, we can also leverage react-redux's connect() function right out of the box. connect() is a higher-order function that takes in two arguments (as well as a few optional arguments) and returns a function. Check out its signature below:

const buildConnectedComponent = connect(mapStateToProps, mapDispatchToProps);
What's vital to understand is that buildConnectedComponent is a function. buildConnectedComponent will take a regular (presentational) React component and return a new, "connected" component.

const ConnectedComponent = buildConnectedComponent(MyComponent);
ConnectedComponent renders MyComponent, passing it the props as defined by mapStateToProps and mapDispatchToPros.

We can avoid having the intermediary buildConnectedComponent variable and just call the functions back-to-back:

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent)

## Summary
React often leverages Redux for more predictable state management via the react-redux bindings. These bindings give us an API that simplifies the most common interactions between React and Redux.

Provider makes it possible for Redux to pass data from the store to any React components that need it. It uses React’s context feature to make this work.

connect() connects a React component to the Redux store. The mapStateToProps() function allows us to specify which state from the store you want passed to your React component, while the mapDispatchToProps() function allows us to bind dispatch to action creators before they ever hit the component.


## Code
1) [Class Code](./react-redux-context-class-code.html)
2) [Connected-Api](./connect-api.html)

## Questions
1) [Provider](../../../imgs/provider.png)
2) [Connect-1](../../../imgs/connect-1.png)
3) [Connect-2](../../../imgs/connect-2.png)

## [Videos](./react-redux+Videos)






 




