## Redux Middleware 
Redux Middleware allows to run some code in between store.dispatch and reducer 

*** Redux makes state management more predictable: in order to change the store’s state, an action describing that change must be dispatched to the reducer. In turn, the reducer produces the new state. This new state replaces the previous state in the store. So the next time store.getState() is called, the new, most up-to-date state is returned. *** 

Between the dispatching of an action and the reducer running, we can introduce code called middleware to intercept the action before the reducer is invoked. The Redux docs describe middleware as:

a third-party extension point between dispatching an action, and the moment it reaches the reducer.

*** What's great about middleware is that once it receives the action, it can carry out a number of operations, including: *** 

producing a side effect (e.g., logging information about the store)
processing the action itself (e.g., making an asynchronous HTTP request)
redirecting the action (e.g., to another piece of middleware)
dispatching supplementary actions

## Where Middleware Fits
The way we had to structure our code originally, our checkAndDispatch() function had to run before store.dispatch(). Why is this? Because when store.dispatch() is invoked, it immediately calls the reducer that was passed in when createStore() was invoked. If you remember back to the first lesson, this is what our dispatch() function looked like (and is very similar to the real Redux dispatch() function):
```
const dispatch = (action) => {
 state = reducer(state, action)
 listeners.forEach((listener) => listener())
}
```
So you can see that calling store.dispatch() will immediately invoke the reducer() function. There's no way to run anything in between the two function calls. So that's why we had to make our checkAndDispatch() so that we can run verification code before calling store.dispatch().

However, this isn't maintainable. If we wanted to add another check, then we'd need to write another preceding function, that then calls checkAndDispatch() that then calls store.dispatch(). Not maintainable at all.

With Redux's middleware feature, we can run code between the call to store.dispatch() and reducer(). The reason this works, is because Redux's version of dispatch() is a bit more sophisticated than ours was, and because we provide the middleware functions when we create the store.
```
const store = Redux.createStore( <reducer-function>, <middleware-functions> )
```
Redux's createStore() method takes the reducer function as its first argument, but then it can take a second argument of the middleware functions to run. Because we set up the Redux store with knowledge of the middleware function, it runs the middleware function between store.dispatch() and the invocation of the reducer.

Applying Middleware
Just as we saw in the previous video, we can implement middleware into a Redux app by passing it in when creating the store. More specifically, we can pass in the applyMiddleware() function as an optional argument into createStore(). Here's applyMiddleware()'s signature:
```
applyMiddleware(...middlewares)
```
Note the spread operator on the middlewares parameter. This means that we can pass in as many different middleware as we want! ***Middleware is called in the order in which they were provided to applyMiddleware().***

We currently have the checker middleware applied to our app, but we'll soon add a new logger middleware as well. To create a Redux store that uses our checker middleware, we can do the following:

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(checker))

### Functions Returning Functions 💡
Redux middleware leverages a concept called higher-order functions. A higher-order function is a function that either:

accepts a function as an argument
returns a function

Higher-order functions are a powerful programming technique that allow functions to be significantly more dynamic. You've actually already written a higher-order function in this course. The createRemoveButton() function is a higher-order function because the onClick parameter is expected to be a function (because onClick is set up as an event listener callback function.

## A New Middleware: Logging
Currently, our application is making use of a single middleware: checker. Because we can use multiple middleware functions in a single application, let's create a new middleware function called logger that will log out information about the state and action.

## Questions
1) [Middleware 1](../../imgs/redux-middleware-q1.png)