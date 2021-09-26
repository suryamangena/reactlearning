## Three New Concepts of React
1) Props -> Allows you to pass data into your components
2) Functional Components -> An alternative, and probably more intuitive(easy to understand) approach to creating components
3) Controlled Components -> Allow you to hook up the forms in your application to your component state 

## Functional vs Class Component
1) Easy to understand 
2) No need to use this keyword
3) ***Functional Component is Stateless as these components do not have to worry about managing changing data. They just display the data.***
4) No need to mention the render 

## Class Component
```
class User extends React.Component {
    render(){
        return (
            <p>Username: {this.props.username}</p>
        )
    }
}
```

## Functional Component
```
function User(props){
    return (
        <p> Username: {props.username}</p>
    )
}
```

## Stateless Functional Components Recap
If your component does not keep track of internal state (i.e., all it really has is just a render() method), you can declare the component as a Stateless Functional Component.

Remember that at the end of the day, React components are really just JavaScript functions that return HTML for rendering. As such, the following two examples of a simple Email component are equivalent:

```
class Email extends React.Component {
 render() {
   return (
     <div>
       {this.props.text}
     </div>
   );
 }
}
const Email = (props) => (
 <div>
   {props.text}
 </div>
);
```

## State
Earlier in this Lesson, we learned that props refer to attributes from parent components. In the end, ***props represent "read-only" data that are immutable.***

***A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page. State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).***


## Encapsulate the complexity of state management to individual components.
To handle state in the component just add state property in the component, state has object as value.
```
class User extends React.Component {
    state = {
        username: 'Tyler'
    }
    render(){
        return (
            <p>Username: {this.state.username}</p>
        )
    }
}
```
*** In the code above, we put the state object directly inside the class...not in a constructor() method!*** 
```
class User extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     username: 'Tyler'
   };
 }
}
```
*** Having state outside the constructor() means it is a class field, which is a proposal for a new change to the language. It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it! ***

## Props in Initial State
When defining a component's initial state, avoid initializing that state with props. This is an error-prone anti-pattern, since state will only be initialized with props when the component is first created.
```
this.state = {
 user: props.user
}
```
***In the above example, if props are ever updated, the current state will not change unless the component is "refreshed." Using props to produce a component's initial state also leads to duplication of data, deviating from a dependable "source of truth."***

## State Recap 
***Important One***
By having a component manage its own state, any time there are changes made to that state, React will know and automatically make the necessary updates to the page.

This is one of the key benefits of using React to build UI components: when it comes to re-rendering the page, we just have to think about updating state. We don't have to keep track of exactly which parts of the page change each time there are updates. We don't need to decide how we will efficiently re-render the page. React compares the previous output and new output, determines what has changed, and makes these decisions for us. This process of determining what has changed in the previous and new outputs is called Reconciliation

## Update State with setState 
1) Updating state directly will not going work as below, as changing the state directly, react will have no idea  that state of component has changed
```
this.state.username = 'Tyler'
```
2) To solve this proble, react provided helper method setState(), there are two ways use this function
### First Way -> Passing a function -> We will use this when new component depends on previous state
```
this.setState((prevState)=>({
    count: prevState.count +1
}))
```
### Second Way -> Passing an object -> for everything else use object
```
this.setState({
    username: 'Surya'
})
```
3) Whenever, we use setState() react will render the entire application and update the UI. In React, UI is a just function of your state

## PropTypes
As we implement additional features into our app, we may soon find ourselves debugging our components more frequently. For example, what if the props that we pass to our components end up being an unintended data type (e.g. an object instead of an array)? PropTypes is a package that lets us define the data type we want to see right from the get-go and warn us during development if the prop that's passed to the component doesn't match what is expected.

It provides the error information in console invalid data type when it doesn't match with defined propType 

```
import PropTypes from 'prop-types';

class Email extends React.Component {
  render() {
    return (
      <h3>Message: {this.props.text}</h3>
    );
  }
}

Email.propTypes = {
  text: PropTypes.string.isRequired
};
```

## PropTypes Recap
All in all, PropTypes is a great way to validate intended data types in our React app. Type checking our data with PropTypes helps us identify these bugs during development to ensure a smooth experience for our app's users.

## Controlled Components
Form state lives inside the DOM, whole point of react is more effectively manage state in application
Controlled Components render the form and maintains its state in component rather than inside the DOM
Controlled Components allow you to update your UI based on the form itself
Below are the benefits of Controlled Components,
1) Instant input validations
2) allow us to conditional disable or enable 
3) Input formats

```
class NameForm extends React.Component{
    state = {
        email:''
    }
    render(){
        return (
            <form>
                <input type="text" value={this.state.email}\>
            </form>
        )
    }
}
```

## React Developer Tools

## Gaurd Operator && 

## Controlled Components Recap
Controlled components refer to components that render a form, but the "source of truth" for that form state lives inside of the component state rather than inside of the DOM. The benefits of Controlled Components are:

instant input validation
conditionally disable/enable buttons
enforce input formats
In our ListContacts component, not only does the component render a form, but it also controls what happens in that form based on user input. In this case, event handlers update the component's state with the user's search query. And as we've learned: any changes to React state will cause a re-render on the page, effectively displaying our live search results.

## componentDidMount()
componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)...If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

## forceUpdate()
By default, when your component’s state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes.

















