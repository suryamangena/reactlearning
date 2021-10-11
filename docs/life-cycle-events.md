## Component Life Cycle Events
Lifecycle events are special methods can component can have that allow us to hook into the views when specific conditions happen. 
Lifecycle events are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.

### componentDidMount()

invoked immediately after the component is inserted into the DOM
componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering
```
import React, { Component } from 'react';
import fetchUser from '../utils/UserAPI';

class User extends Component {
 constructor(props) {
   super(props);

   this.state = {
     name: '',
     age: ''
   };
 }

 componentDidMount() {
   fetchUser().then((user) => this.setState({
     name: user.name,
     age: user.age
   }));
 }

 render() {
   return (
     <div>
       <p>Name: {this.state.name}</p>
       <p>Age: {this.state.age}</p>
     </div>
   );
   }
}

export default User;
```

You'll notice that this component has a componentDidMount() lifecycle event. This component seems pretty straightforward, but let's walk through the order of how it works:

1. The render() method is called which updates the page with a <div> that has one paragraph for the name and one paragraph for the age. What's important to realize is that this.state.name and this.state.age are empty strings (at first), so the name and age don't actually display
2. Once the component has been mounted, the componentDidMount() lifecycle event occurs
    a. The fetchUser request from the UserAPI is run which sends a request to the user database
    b. When the data is returned, setState() is called and updates the name and age properties
3. Since the state has changed, render() gets called again. This re-renders the page, but now this.state.name and this.state.age have values
Let's use componentDidMount() to fetch real users from a server in our Contacts app!

## componentDidMount() Recap
componentDidMount() is one of a number of lifecycle events that React offers. 
componentDidMount() gets called after the component is "mounted" (which means after it is rendered). If you need to dynamically fetch data or run an Ajax request, you should do it in componentDidMount().

## Adding to the DOM
The following lifecycle events will be called in order when a component is being added to the DOM:

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()


## Re-rendering
The following lifecycle events will be called in order when a component is re-rendered to the DOM:

1) getDerivedStateFromProps()
2) shouldComponentUpdate()
3) render()
4) getSnapshotBeforeUpdate()(specific use cases)
5) componentDidUpdate()

## Removing from the DOM
This lifecycle event is called when a component is being removed from the DOM:

componentWillUnmount()


### componentWillUnmount()

invoked immediately before a component is removed from the DOM

### getDerivedStateFromProps()

invoked after a component is instantiated as well as when it receives brand new props

## Points to Remember
1) The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
2) Do not rely on it to “prevent” a rendering, as this can lead to bugs.
3) Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand.
4) We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.

```
import React, { Component } from 'react';
import fetchUser from '../utils/UserAPI';

class User extends Component {
 constructor(props) {
   super(props);

   this.state = {
     name: '',
     age: ''
   };
 }

 componentDidMount() {
   fetchUser().then((user) => this.setState({
     name: user.name,
     age: user.age
   }));
 }

 render() {
   return (
     <div>
       <p>Name: {this.state.name}</p>
       <p>Age: {this.state.age}</p>
     </div>
   );
   }
}

export default User;
```

## Questions:

Why shouldn't you make Ajax requests in the render method? Select all that apply:
1) render() method shouldn't be concerned with much more than returning UI
2) You don't have complete control over when the render() method will be invoked

## Pure Component vs Component 
https://www.youtube.com/watch?v=YCRuTT31qR0

## Pure Component 
A Pure Component implements shouldComponentUpdate with a shallow prop and state comparison 

SC(Shallow Comparison) of prevState with currentState
SC of prevProps with currentProps

When it finds difference in above two cases then only component will re-render. If the parent component doesn't render then childern will also not re-render. 
Preventing unnecessary render will boost the performance. 

**Key point:** We shouldn't change objects in props or state, if we need to add a item to list dont mutate it by pushing the item, reference to array never changes and pure component will check for reference and pure component will not re-render eventhough there is a difference, always have a new object 




