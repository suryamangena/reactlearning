## Component Life Cycle Events
Lifecycle events are special methods can component can have that allow us to hook into the views when specific conditions happen. 
Lifecycle events are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.

### componentDidMount()

invoked immediately after the component is inserted into the DOM

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
